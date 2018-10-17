######################################################################
# Purpose:  To change the marker's name to rgd_id in the files
#           GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_xx.html. 
# FileName: map_mark_id_bn.pl 
# Usage   : perl map_mark_id_bn.pl 1/2/3/4/5/..../21
# Date    : May 24, 00
# Author  : Hanping Long
######################################################################                             		         
#!/opt/GNUperl/bin/perl  

use strict;
$| = 1;

my $select = shift(@ARGV) || die "make a selection\n";

my $outfile1="/rgd/DATA/maps/SHRSP_X_BN/test";
my $outfile2="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_02.htm";
my $outfile3="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_03.htm";
my $outfile4="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_04.htm";
my $outfile5="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_05.htm";
my $outfile6="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_06.htm";
my $outfile7="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_07.htm";
my $outfile8="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_08.htm";
my $outfile9="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_09.htm";
my $outfile10="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_10.htm";
my $outfile11="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_11.htm";
my $outfile12="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_12.htm";
my $outfile13="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_13.htm";
my $outfile14="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_14.htm";
my $outfile15="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_15.htm";
my $outfile16="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_16.htm";
my $outfile17="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_17.htm";
my $outfile18="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_18.htm";
my $outfile19="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_19.htm";
my $outfile20="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_20.htm";
my $outfile21="/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_21.htm";

my $input1= "/rgd/DATA/maps/SHRSP_X_BN/GENETIC_SHRSP_X_BN_01.html";
my $input2= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_02.html";
my $input3= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_03.html";
my $input4= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_04.html";
my $input5= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_05.html";
my $input6= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_06.html";
my $input7= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_07.html";
my $input8= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_08.html";
my $input9= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_09.html";
my $input10= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_10.html";
my $input11= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_11.html";
my $input12= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_12.html";
my $input13= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_13.html";
my $input14= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_14.html";
my $input15= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_15.htm1";
my $input16= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_16.html";
my $input17= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_17.html";
my $input18= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_18.html";
my $input19= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_19.html";
my $input20= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_20.html";
my $input21= "/rgd/DATA/maps/GENETIC_SHRSP_X_BN/GENETIC_SHRSP_X_BN_21.html";

my $inputMark1 = "/rgd/DATA/maps/marker_gene.lst";
my $inputMark2 = "/rgd/DATA/maps/marker_sslp.lst";
my $inputMark3 = "/rgd/DATA/maps/marker_est.lst";

if ($select == 1)
{ 
    open (INPUT, "$input1") || die "Can't open the input file:$!";
    open (OUT, ">$outfile1") || die "Can't open the out put file:$!";
}elsif ($select == 2){
    open (INPUT, "$input2") || die "Can't open the input file:$!";
    open (OUT, ">$outfile2") || die "Can't open the out put file:$!";
}elsif ($select == 3){
   open (INPUT, "$input3") || die "Can't open the input file:$!";
   open (OUT, ">$outfile3") || die "Can't open the out put file:$!";
}elsif ($select == 4){
   open (INPUT, "$input4") || die "Can't open the input file:$!";
   open (OUT, ">$outfile4") || die "Can't open the out put file:$!";
}elsif ($select == 5){
   open (INPUT, "$input5") || die "Can't open the input file:$!";
   open (OUT, ">$outfile5") || die "Can't open the out put file:$!";
}elsif ($select == 6){
   open (INPUT, "$input6") || die "Can't open the input file:$!";
   open (OUT, ">$outfile6") || die "Can't open the out put file:$!";
}elsif ($select == 7){
   open (INPUT, "$input7") || die "Can't open the input file:$!";
   open (OUT, ">$outfile7") || die "Can't open the out put file:$!";
}elsif ($select == 8){
   open (INPUT, "$input8") || die "Can't open the input file:$!";
   open (OUT, ">$outfile8") || die "Can't open the out put file:$!";
}elsif ($select == 9){
   open (INPUT, "$input9") || die "Can't open the input file:$!";
   open (OUT, ">$outfile9") || die "Can't open the out put file:$!";
}elsif ($select == 10){
   open (INPUT, "$input10") || die "Can't open the input file:$!";
   open (OUT, ">$outfile10") || die "Can't open the out put file:$!";
}elsif ($select == 11){
   open (INPUT, "$input11") || die "Can't open the input file:$!";
   open (OUT, ">$outfile11") || die "Can't open the out put file:$!";
}elsif ($select == 12){
   open (INPUT, "$input12") || die "Can't open the input file:$!";
   open (OUT, ">$outfile12") || die "Can't open the out put file:$!";
}elsif ($select == 13){
   open (INPUT, "$input13") || die "Can't open the input file:$!";
   open (OUT, ">$outfile13") || die "Can't open the out put file:$!";
}elsif ($select == 14){
   open (INPUT, "$input14") || die "Can't open the input file:$!";
   open (OUT, ">$outfile14") || die "Can't open the out put file:$!";
}elsif ($select == 15){
   open (INPUT, "$input15") || die "Can't open the input file:$!";
   open (OUT, ">$outfile15") || die "Can't open the out put file:$!";
}elsif ($select == 16){
   open (INPUT, "$input16") || die "Can't open the input file:$!";
   open (OUT, ">$outfile16") || die "Can't open the out put file:$!";
}elsif ($select == 17){
   open (INPUT, "$input17") || die "Can't open the input file:$!";
   open (OUT, ">$outfile17") || die "Can't open the out put file:$!";
}elsif ($select == 18){
   open (INPUT, "$input18") || die "Can't open the input file:$!";
   open (OUT, ">$outfile18") || die "Can't open the out put file:$!";
}elsif ($select == 19){
   open (INPUT, "$input19") || die "Can't open the input file:$!";
   open (OUT, ">$outfile19") || die "Can't open the out put file:$!";
}elsif ($select == 20){
   open (INPUT, "$input20") || die "Can't open the input file:$!";
   open (OUT, ">$outfile20") || die "Can't open the out put file:$!";
}elsif ($select == 21){
   open (INPUT, "$input21") || die "Can't open the input file:$!";
   open (OUT, ">$outfile21") || die "Can't open the out put file:$!";
}

##############################################################3
# Open the marks file
############################################################## 
open (INPUT1, "$inputMark1") || die "Can't open the input1 file:$!";
open (INPUT2, "$inputMark2") || die "Can't open the input2 file:$!";
open (INPUT3, "$inputMark3") || die "Can't open the input3 file:$!";


#############################################################
# get the URL from the map files 
#############################################################
my $head = <INPUT>;
while ( $head !~ /\<map/ )
{
    $head = <INPUT>;
}

print OUT "$head";

my @masters = <INPUT>;
close (INPUT);

my %beforeHref = ();
my %markerName = ();
my %firstMarker = ();
my %secondMarker = ();
my %beforeHref2 = ();

my $mapId = 1000;
my $chrId = 1;

my $master;
my @markers;

my $count = 0;
my $count2 = 0;


foreach $master (@masters)
{ 
   chomp $master;
 
   if ( $master =~ /\<area/ && $master !~ /FirstMarker/ )
   {  
        $count++;      
    my   @record = split(/\&/, $master);
         $record[2] =~ s/\"\>//g;
    my   @markId = split(/\=/,$record[2]);
         
        # print OUT "$markId[1]\n";

    my  $URL = "/query/query.cgi?id=$markId[1]";
        $markerName{$markId[1]} = $markId[1] ;

    my @before = split (/href=/, $record[0]);
       $beforeHref{$markId[1]} = $before[0];

   }
   if ($master =~ /FirstMarker/ )
   {  
      $count2++;
      my @record2 = split(/&/, $master);
      
      my @marker1 = split(/\=/, $record2[2]);
         $firstMarker{$marker1[1]} = $marker1[1];

      my @marker2 = split(/\=/, $record2[4]);
         $secondMarker{$marker1[1]} = $marker2[1];
     
      my @before = split (/href=/, $record2[0]);  
         $beforeHref{$marker1[1]} = $before[0];

   }
}

print "$count\n";
print "count2 : $count2\n";

my $key;
my $num = 0;
 
foreach $key (keys(%markerName))
{
  # print OUT "$markerName{$key}\n";
  #  print OUT "$key\n";
}

    
foreach $key (keys(%firstMarker))
{  
  $num ++;
  # print OUT "$firstMarker{$key},$secondMarker{$key}\n";
}
print "num: $num\n";

##################################################################################3
# read in the rgd_id  from data files
###################################################################################

my @inputfile1 = <INPUT1>;
close  (INPUT1);

my $line;
foreach $line (@inputfile1)
{  
   chomp $line;
   if ( $line =~ /\d+/ )
   { 
      my @marker = split (/\s+/, $line); 
       # print OUT   "$marker[0],$marker[1]\n";
      # $marker[1] =~ s/\s+//g;
       
       my $key;
       foreach $key (keys(%markerName))
       { 

         if ( $marker[0] eq $key )
         {
           $markerName{$marker[0]} = $marker[1];
           #print OUT "$marker[0],$marker[1]\n";
         }
      } #for
     
      my $key; 
      foreach $key (keys(%firstMarker))
      {
        if ( $marker[0] eq $key )
        {
          $firstMarker{$marker[0]} = $marker[1];
          #print OUT "$marker[0],$marker[1]\n";
        }
      }

      my $key;
      foreach $key (keys(%secondMarker)) 
      {
        if ( $marker[0] eq $secondMarker{$key} )
        {
          $secondMarker{$key} = $marker[1];
          #print OUT "$marker[0],$marker[1]\n";
        }
      }

   } #if
} # for


my @inputfile2 = <INPUT2>;
close (INPUT2);

my $line;
my $name;
outside:
foreach $line (@inputfile2)
{
   chomp $line;
   if ( $line !~ /RGD_NAME/ && $line !~ /RGD_ID/ && $line !~ /\-/ )
   { 
          
       $line =~ s/\s+//g;
       
      # print OUT "$line\n";
  
       if ( $line !~ /\b\d+\b/ && $line !~ /^$/ )
       {
          #print OUT  "$line,";
          $name = $line;  
          #next outside;
          #print OUT "$name\n";

       } elsif ($line !~ /^$/) {
                #print OUT "$name,$line\n";
                 my $key = 0;
                 foreach $key (keys(%markerName))
                 {
                    print OUT "+++$key\n";
                     print OUT "---$name\n";

                    #if ( $name eq $key )
                   if ( $name =~ /$key/ )
                   {
                     $markerName{$name} = $line;
                     print OUT "$name, $markerName{$name}\n";
                   }
                 } # for
                
                 my $key;
                 foreach $key (keys(%firstMarker))
                 {
                    if ( $name eq $key )
                    {
                       $firstMarker{$key} = $line;
                       #print OUT "$key, $firstMarker{$key}\n";
                    }
                 }

                 my $key;
                 foreach $key (keys(%secondMarker)) 
                 {
                     #foreach $value (values(%secondMarker))
                     
                        if ( $name eq $secondMarker{$key} )
                        {
                           $secondMarker{$key} = $line;
                           # print OUT "$key,$secondMarker{$key}\n";
                        }
                 }
               # print OUT "$name,$line\n";
   
      } #els            
   }
}


my @inputfile3 = <INPUT3>;
close (INPUT3);

my $line;
my $name;
foreach $line (@inputfile3)
{
   chomp $line;
   if ( $line !~ /RGD_EST_NAME/ && $line !~ /RGD_ID/ && $line !~ /\-/ )
   {

       $line =~ s/\s+//g;

       if ( $line !~ /\b\d+\b/ && $line !~ /^$/ )
       {
         # print OUT  "$line,";
          $name = $line;
          #next outside;

       } elsif ($line !~ /^$/) {
              #  print OUT "$line\n";
                 my $key;
                 foreach $key (keys(%markerName))
                 {
                   if ( $name eq $key )
                   {
                     $markerName{$name} = $line;
                     #print OUT "$name, $markerName{$name}\n";
                   }
                 } # for

                 my $key;
                 foreach $key (keys(%firstMarker))
                 {
                    if ( $name eq $key )
                    {
                       $firstMarker{$key} = $line;
                       #print OUT "$key, $firstMarker{$key}\n";
                    }
                 }

                 my $key;
                 foreach $key (keys(%secondMarker))
                 {
                        if ( $name eq $secondMarker{$key} )
                        {
                           $secondMarker{$key} = $line;
                           # print OUT "$key,$secondMarker{$key}\n";
                        }
                 }
               # print OUT "$name,$line\n";

      } #els
   }
} # end input3
 
my $key;
foreach $key ( keys(%markerName) )
{ 
    # print OUT "$beforeHref{$key}href=\"/query/query.cgi?id=$markerName{$key}\">\n";
    #  print OUT "$markerName{$key}\n";
     # print OUT "$key\n";
}

my $key;
foreach $key (keys(%firstMarker))
{
   # print OUT "$beforeHref{$key}href=\"/query/query_map.cgi?id=$mapId&chr=$chrId&interval=$firstMarker{$key}-$secondMarker{$key}\">\n"; 
}

#foreach $key (keys(%firstMarker))
#{
#   print OUT "$key,  $firstMarker{$key}\n";
#}

#print OUT "Second \n\n\n";
  
#my $key;
#foreach $key (keys(%secondMarker))
#{
#   print OUT "$key,  $secondMarker{$key}\n";
#}

#################################################
# print out the end of the page
#################################################
foreach $master (@masters)
{
  chomp $master;

  if ($master !~ /\<area/ )
  {
     print OUT "$master\n";
  }
}
 
