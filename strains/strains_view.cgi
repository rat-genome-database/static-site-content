#!/opt/GNUperl/bin/perl -w

##############################
#
# strain_view.cgi Simon Twigger May 2000
#
# Displays the Strain report for a given Strain ID
#
##############################
use lib '/rgd_home/2.0/TOOLS/common';

use RGD::DB;
use RGD::HTML;
use CGI qw(:standard);
use strict;

my $form = new CGI;
my $db = RGD::DB->new();
$db->{dbh}->{LongTruncOk} = 1;
$db->{dbh}->{LongReadLen} = 4000000;

my $html = RGD::HTML->new(
			  title => "Strain Report",
			  doc_title => "Strain Report",
			  version   => "1.0",
			  link_dir  => "strains",
			 );
my $baseURL=$html->get_baseURL; 
my $baseCGI=$html->get_baseCGI;

# Reference for the table hash with column info for all tables
my $table_ref = $db->get_table_hash_ref();

my %ref_list = ();
my %ref_data = ();

# Read in parameters
my $id      = $form->param('id')  || 61107; #die "No ID value was provided\n";
my $format  = $form->param('fmt') || "html";
my $keyword = $form->param('kwd') || "";
my $length  = $form->param('length') || "short"; # Do we show all the strain characteristics and stuff
# remove any RGD: tag from the start of the ID
$id =~ s/RGD://;

# Assume the ID is a strain for the moment... =)

my @data = &get_strain_data($id);

# Get the Reference information for the ID
my @rgd_ids = ($id);
$db->get_rgd_id_refs(\%ref_list, \%ref_data, @rgd_ids);

# my $num_alleles = &get_allele_data($id);

if(!@data) {
  # HTML error about strain not found
  exit;
}

if($format =~ /text/i) {

}else {
  &display_html(\@data);
}

exit;

########################

sub display_html {

  my $data_ref = shift @_;

  my @columns = split ',',$table_ref->{strains}{select};
  my %data = ();
  my %all_data = (); # Will hold the strain data for all related strains, keyed by symbol
  
  for my $i (0 .. $#columns) {
    if ($data_ref->[$i]) {
      $data{$columns[$i]} = $data_ref->[$i];
      $all_data{$data_ref->[6]}{$columns[$i]} = $data_ref->[$i];
    }
    else {
      $data{$columns[$i]} = "";
      $all_data{$data_ref->[6]}{$columns[$i]} = $data_ref->[$i];
    }

    # print "$columns[$i] \t $data{$columns[$i]} \n";

  }

  

  $html->html_head;
  $html->tool_start;


  print <<__JS__;
  
  <script language='JavaScript'>
  function start_help(anchor) {
     top.rgdhelp=open("/tu/strains/strain_report_help.html#"+anchor,"helpwindow","scrollbars=yes,toolbar=no,directories=no,menubar=no,status=no,resizable=yes,width=400,height=240");
     top.rgdhelp.focus();
   }
  </script>
  
__JS__



  my %related = get_related_strain_data($data{STRAIN});

  if (%related) {
    
    foreach my $str_id (keys %related) {
      my @tmp =  &get_strain_data($str_id);
      
      for my $i (0 .. $#columns) {
	if ($tmp[$i]) {
	  $all_data{$tmp[6]}{$columns[$i]} = $tmp[$i];
	}
	else {
	  $all_data{$tmp[6]}{$columns[$i]} = "";
	}

      }
      
    }
    
  }
  
  
  # quick fix for data load error
  if ($data{FULL_NAME} =~ /F\d/) {
    delete $data{FULL_NAME};
  }

  print "<TABLE>\n";
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('symbol')\" title=\"what's this?\">Symbol</a></b>: </td><td>$data{STRAIN_SYMBOL}</td></tr>";
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('strain')\" title=\"what's this?\">Strain</a></b>: </td><td>$data{STRAIN}</td></tr>";
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('substrain')\" title=\"what's this?\">Substrain</a></b>: </td><td>$data{SUBSTRAIN}</td></tr>"if $data{SUBSTRAIN};
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('full_name')\" title=\"what's this?\">Name</a></b>: </td><td>$data{FULL_NAME}</td></tr>" if $data{FULL_NAME};
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('source')\" title=\"what's this?\">Source</a></b>: </td><td>$data{SOURCE}</td></tr>" if $data{SOURCE};
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('strain_type')\" title=\"what's this?\">Type</a></b>: </td><td>$data{STRAIN_TYPE_NAME_LC} <BR>";

  

  delete $related{$id} if $related{$id};
  
  if(%related) {
      print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('see_also')\" title=\"what's this?\">See Also</a></b>: </td><td>";

      # sort using an anonymous subroutine to alphabetically order the strain names
      foreach my $str (sort { $related{$a}{STRAIN_SYMBOL} cmp $related{$b}{STRAIN_SYMBOL} } keys %related) {
	my $url = "$baseCGI/strains/strains_view.cgi?id=$str";
	print "<A HREF=\"$url\">$related{$str}{STRAIN_SYMBOL}</a><BR>";
      }
      print "</td></tr>\n";
    }
  print "</table>\n";
  
  
  # If this strain is a specific substrain, dont show all the related_strain stuff
  # Have to delete the entries in $all_data apart from the original strain/substrain
  
  if($data{SUBSTRAIN}) {
    foreach my $s (keys %all_data) {
      # remove each entry unless its from the selecte strain/substrain
      delete $all_data{$s} unless ($s eq $data{STRAIN_SYMBOL});
    }
  }
#--------------added by henrey---------------
  my @genotype=("BN","CDF","FHH","FHH-1BN/Mcwi","GH","LE/BluGill","LEW","SHR","SPRD","SS","SS-13BN/Mcwi","SS-16BN/Mcwi","SS-18B/Mcwi","SS-20BN/Mcwi","SS-2BN/Mcwi","SS-6BN/Mcwi","SS-7BN/Mcwi","SS-YBN/Mcwi","SS.BN-(D12arb13-D12rat79)/Mcwi");
  my @phenotype=("BN","CDF","FHH","FHH-1BN/Mcwi","GH","LE/BluGill","LEW","SHR","SPRD","SS","SS-13BN/Mcwi","SS-16BN/Mcwi","SS-18B/Mcwi","SS-20BN/Mcwi","SS-2BN/Mcwi","SS-6BN/Mcwi","SS-7BN/Mcwi","SS-YBN/Mcwi","SS.BN-(D12arb13-D12rat79)/Mcwi","SS.BN-(D8rat163-D8rat81)/Mcwi");
  my $flag1=undef;
  my $flag2=undef;
  
  foreach my $match (@genotype) {
	  if ($data{STRAIN_SYMBOL} eq "$match") {
		  $flag1="yes";
	  }
  }

  foreach my $match (@phenotype) {
	  if ($data{STRAIN_SYMBOL} eq "$match") {
		   $flag2="yes";
	  }
  }

  if($flag1 && $flag2){
	  print "<HR>";
	  print "<P><h3>PGA genotype data: <A href=http://pga.mcw.edu/pga-bin/show_genotype.cgi?strain=$data{STRAIN_SYMBOL}><img src=\"$baseURL/commom/images/physGen.gif\">$data{STRAIN_SYMBOL}</A></h3>";
	  print "<P><h3>PGA phenotype data: <A href=http://pga.mcw.edu/pga-bin/fetch_phenotype.cgi?strain=$data{STRAIN_SYMBOL}>$data{STRAIN_SYMBOL}</A></h3>";
  }
  elsif($flag1){
	  print "<HR>";
	  print "<P><h3>PGA genotype data: <A href=http://pga.mcw.edu/pga-bin/show_genotype.cgi?strain=$data{STRAIN_SYMBOL}>$data{STRAIN_SYMBOL}</A></h3>";
  }
  elsif($flag2){
	  print "<HR>";
	  print "<P><h3>PGA phenotype data: <A href=http://pga.mcw.edu/pga-bin/fetch_phenotype.cgi?strain=$data{STRAIN_SYMBOL}>$data{STRAIN_SYMBOL}</A></h3>";
  }
  else{
	#nothing to print
  }
#----------------------------------------------------------------
  print "<BR><HR>\n";
  print "<p><h3>Basic details</b></h3>\n";
  print "<TABLE>\n"; 
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('genetic_markers')\" title=\"what's this?\">Genetic markers</a></b>: </td><td>" . &return_strain_text('GENETICS',\%all_data) . "</td></tr>";
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('coat_color')\" title=\"what's this?\">Coat Color</a></b>: </td><td>" . &return_strain_text('COLOR',\%all_data) . "</td></tr>";
  print "<tr valign=\"top\"><td class=links><b><a href=\"javascript:start_help('inbred_generations')\" title=\"what's this?\"># Inbred Generations</a></b>: </td><td>" . &return_strain_text('INBRED_GEN',\%all_data) . "</td></tr>";
  print "<tr valign=\"top\"><td><b>Origin</b>: </td><td>" . &return_strain_text('ORIGIN',\%all_data) . "</td></tr>";
  print "</table>\n";


  # Get the SSLP allele size data for this strain(s)
  my %num_alleles = ();
  
  foreach my $s (keys %all_data) {
    
    $num_alleles{$s} = &get_allele_data($all_data{$s}{RGD_ID});
  }
  
  if(%num_alleles) {
    print "<BR><HR><BR>\n";
    print "<h3>Strain SSLP data (<a href=\"javascript:start_help('sslp_data')\" title=\"what's this?\">?</a>)</h3>\n";
    foreach my $strain (sort keys %all_data) {
      print "<p><b>$strain</b>: $num_alleles{$strain} SSLP markers have been typed in this strain\n" unless ($num_alleles{$strain} == 0);
    }
    
  }
  
  # get the QTL data for this strain(s)

 
  
  print "<BR><HR><BR>\n";
  print "<h3>Strain QTL data</h3>\n";
  print "<table border=0 cellpadding=2>";
  foreach my $strain (sort keys %all_data) {
    
    my %qtls = &get_qtl_data($all_data{$strain}{RGD_ID});
    
    print  "<tr><td colspan=5><b>$strain</b></td></tr>\n";
    if(%qtls) {
      print "<tr bgcolor=\"#CCCCCC\"><td>Chr</td><td>Symbol</td><td>Name</td><td>Trait</td><td>Subtrait</td></tr>\n";
      foreach my $q (sort { $qtls{$a}{QTL_CHROM} <=> $qtls{$b}{QTL_CHROM} } keys %qtls) {
	print "<tr valign=\"top\"><td>$qtls{$q}{QTL_CHROM} </td><td><A href=\"$baseCGI/qtls/qtls_view.cgi?id=$q\">$qtls{$q}{QTL_SYMBOL}</A></td><td>$qtls{$q}{QTL_NAME}</td><td>$qtls{$q}{TRAIT}</td><td>$qtls{$q}{SUB_TRAIT}</td></tr>\n";
      }
      
    }
    else {
      print "<tr><td colspan=5>No QTLs are recorded for this strain/substrain<br></td></tr>\n";
    }
    print "<tr><td colspan=5>&nbsp;</td></tr>\n";
  }
  print "</table>\n";
  
  
  if ($data{CHARACTERISTICS} || $data{REPRODUCTION} || $data{LIFE_DISEASE} || $data{PHYS_BIOCHEM} || $data{IMMUNOLOGY} || $data{INFECTION} || $data{DRGS_CHEMS} || $data{ANATOMY} || $data{BEHAVIOR}) {
    
    print "<BR><HR><BR>\n";
    print "<h3>Strain Characteristics (<a href=\"javascript:start_help('strain_characteristics')\" title=\"what's this?\">?</a>)</h3>\n";
    
    my $chars = &return_strain_text('CHARACTERISTICS',\%all_data);
    print "<p><b>General</b>:<BR> $chars <BR>" if $chars;
    
    my $rep =  &return_strain_text('REPRODUCTION',\%all_data);
    print "<p><b>Reproduction</b>:<BR> $rep <BR>" if $rep;
    my $life = &return_strain_text('LIFE_DISEASE',\%all_data);
    print "<p><b>Lifespan and Spontaneous Disease</b>:<BR> $life <BR>" if $life;
    my $phys = &return_strain_text('PHYS_BIOCHEM',\%all_data);
    print "<p><b>Physiology and Biochemistry</b>:<BR> $phys <BR>" if $phys;
    my $imm = &return_strain_text('IMMUNOLOGY',\%all_data);
    print "<p><b>Immunology</b>:<BR> $imm <BR>" if $imm;
    my $inf = &return_strain_text('INFECTION',\%all_data);
    print "<p><b>Infection</b>:<BR> $inf <BR>" if $inf;
    my $dchem = &return_strain_text('DRGS_CHEMS',\%all_data);
    print "<p><b>Drugs and Chemicals</b>:<BR> $dchem <BR>" if $dchem;
    my $anat = &return_strain_text('ANATOMY',\%all_data);
    print "<p><b>Anatomy</b>:<BR> $anat <BR>" if $anat;
    my $behav = &return_strain_text('BEHAVIOR',\%all_data);
    print "<p><b>Behavior</b>:<BR> $behav <BR>" if $behav;
  }

  
  print "<BR><HR><BR>\n";
  print "<h3>Associated References (<a href=\"javascript:start_help('references')\" title=\"what's this?\">?</a>)</h3><BR>\n";

  print "<p>For citations in the text, refer to the <a href=\"$baseURL/strains/strain_refs.shtml\">Rat Strain reference list</a><BR><BR>\n";

  foreach my $str (sort keys %all_data) {

    print "<b>$all_data{$str}{'STRAIN_SYMBOL'}</b><BR>\n" unless (keys %all_data == 1);
    print $html->get_citation_html(\$db,$all_data{$str}{RGD_ID});
    print "<P>\n";
  }


  my %info = $db->get_RGDid_data($id);
  
  print "<BR><HR>\n";
  print "<p><B>RGD ID:</B> $info{'rgd_id'}<BR>\n";
  print "<B>Created:</B> $info{'created_date'}<BR>\n";
  print "<B>Released:</B> $info{'released_date'}<BR>" if $info{'released_date'};
  print "<BR>\n";

  $html->tool_end;
  $html->html_foot;


} # end of display_html



####################
#
# return_strain_text - compiles the text for all strains and substrains, where required
#
####################

sub return_strain_text {

  my ($field, $all_data_ref) = @_;

  my $return_text = "";
  my $num_strains = keys %$all_data_ref; # the number of strains in the hash

  foreach my $str (sort keys %$all_data_ref) {

    if ($all_data_ref->{$str}{$field}) {

      # Only list the strain symbol if there are more than one strain being reported.
      if($num_strains > 1) {
	$return_text .= "<B>$str</B>: ";
      }
      
      $return_text .= "$all_data_ref->{$str}{$field}<BR>\n";
    }

  }

  return $return_text;

}


sub get_strain_data {

  my $id = shift @_;

  my $cols = $table_ref->{strains}{select};

  my $sql = "select $cols from strains where rgd_id = ?";
  
  my $sth = $db->{dbh}->prepare($sql) or die "Can't Prepare statement: $DBI::errstr";
  
  $sth->execute($id) or die "Can't execute statement: $DBI::errstr";
  
  my @rows =  $sth->fetchrow_array();
  
  return @rows;
}

# Retrieve parent and substrain information for a strain (Same Strain value)

sub get_related_strain_data {

  my $strain = shift @_;
  
  my $sql = "select rgd_id,strain_symbol,strain,substrain from strains where strain = ?";
  
  my $sth = $db->{dbh}->prepare($sql) or die "Can't Prepare statement: $DBI::errstr";
  
  $sth->execute($strain) or die "Can't execute statement: $DBI::errstr";
  
  my %results = ();
  
  while (my ($rgd,$sym,$str,$substr) =  $sth->fetchrow_array()) {
    $results{$rgd}{STRAIN_SYMBOL} = $sym;
    $results{$rgd}{STRAIN} = $str;
    $results{$rgd}{SUBSTRAIN} = $substr; 
  }
  
  return %results;
}


sub get_qtl_data {

 my $id = shift @_;
  
 my $sql = <<"SQL";
  SELECT qtl_key from rgd_qtl_strain where strain_key =
         (SELECT strain_key
	 FROM strains
	 WHERE rgd_id = $id)
SQL
  
 my $sth = $db->{dbh}->prepare($sql) or die "Can't Prepare statement: $DBI::errstr";
  
 $sth->execute() or die "Can't execute statement: $DBI::errstr";
  
 my %results = ();
 
 # For each QTL, go around getting QTL info from table
 while (my ($qtl_key) =  $sth->fetchrow_array()) {

   $sql = "select q.rgd_id, q.qtl_name, q.qtl_symbol, q.chromosome, t.trait_name, t.sub_trait_name from qtls q, traits t where t.trait_key = q.trait_key and q.qtl_key = $qtl_key";
   
   my $sth = $db->{dbh}->prepare($sql) or die "Can't Prepare statement: $DBI::errstr";
   
   $sth->execute() or die "Can't execute statement: $DBI::errstr";
   
   while (my ($rgd_id, $name, $symbol,$chrom,$trait,$subtrait) = $sth->fetchrow_array() ) {
     $results{$rgd_id}{QTL_NAME} = $name;
     $results{$rgd_id}{QTL_SYMBOL} = $symbol;
     $results{$rgd_id}{QTL_CHROM} = $chrom;
     $results{$rgd_id}{TRAIT} = $trait;
     $results{$rgd_id}{SUB_TRAIT} = $subtrait;
   }
 }
  
 return %results;

}

sub get_allele_data {

  my $id = shift @_;

  my $sql = <<"SQL";
SELECT count(allele_key) FROM sslps_alleles WHERE strain_key =
	(SELECT strain_key
	 FROM strains
	 WHERE rgd_id = $id)
SQL

  my $sth = $db->{dbh}->prepare($sql) or die "Can't Prepare statement: $DBI::errstr";
  $sth->execute() or die "Can't execute statement: $DBI::errstr";

  my ($num_alleles) = $sth->fetchrow_array();

  return $num_alleles;
  
}


__END__
