#! /usr/bin/perl

# use strict;


##
# COMMAND LINE OPTIONS
#
#
###########
# basic info
###########
#	l - log file to parse
#	o - output file to write results to
#
##########
# Optional things
##########
#	a - output all lists
#	c - css stylesheet to use
#	k - show combined keywords and concepts
#	q - show quick search results
#	g - show gene search results
#	b - show ontology browser results
#	v - show ontology viewer results
#	t - show term minimum count limit for each section
#
##

use Getopt::Std;
getopts('l:c:qgbvak');


my $file = $opt_l || die "Must provide a log file to parse!\n";
# my $outfile = $opt_o || die "Need to send the data somewhere - please provide an output file name";

my %keywords = ();


my $css = "";
if(!defined $opt_c) {
	&init_css();
}

my %stopwords = (
'I' => "stop",
'a' => "stop",
'and' => "stop",
'about ' => "stop",
'an' => "stop",
'are' => "stop",
'as' => "stop",
'at' => "stop",
'be' => "stop",
'by' => "stop",
'com' => "stop",
'de' => "stop",
'en' => "stop",
'for' => "stop",
'from' => "stop",
'how' => "stop",
'have' => "stop",

'in' => "stop",
'is' => "stop",
'it' => "stop",
'its' => "stop",
'la' => "stop",
'may' => "stop",
'not' => "stop",
'of' => "stop",
'on' => "stop",
'or' => "stop",
'that' => "stop",
'the' => "stop",
'this' => "stop",
'these' => "stop",
'than' => "stop",
'to' => "stop",
'was' => "stop",
'were' => "stop",
'which' => "stop",
'what' => "stop",
'when' => "stop",
'where' => "stop",
'who' => "stop",
'will' => "stop",
'with' => "stop",
'und' => "stop",
'the' => "stop",

'gene' => "stop",
'genes' => "stop",
'protein' => "stop",
'proteins' => "stop",
'kda' => "stop",
'kilobases' => "stop",
'view_large_graphics' => "stop",

'www' => "stop");





my $length_minimum = "3";
my $tag_minimum = 13;

open (IN, $file) or die "Cant open file to read in text: $!\n";

my %ontology_searches = ();
my %quick_searches = ();
my %ontology_views = ();
my %gene_searches = ();

#######
# Modify the various regexs in this section to 
# look for URLs in the apache log file
######

LINE:
while (<IN>) {

	$_ =~ s/\%20/ /g;
	my $word = "";
	
	if(/searchKeyword=(\D+\d+|\D+) HTTP/) {
		$word = $1;
		
		# Filter out preceding RGD so we just have text entries
		if($word !~ /^RGD\:/) {
			$quick_searches{lc($word)} ++;
		}
		# print "Found $1\n";
	}
	elsif(/ont_term1=(\w+\s*\w*)\&/) {
		$word = $1;
		if($word ne "view_large_graphics") {
			$ontology_views{lc($word)} ++;
		}# print "Found $1\n";
	}
	elsif(/ont_term=(\w+\s*\w*)\&/) {
		$word = $1;
		if($word ne "view_large_graphics") {
			$ontology_views{lc($word)} ++;
		}
		# print "Found $1\n";
	}
	elsif (/keyword=(\D+\d+|\D+) HTTP/) {
		$word = $1;
		$gene_searches{lc($word)} ++;
	}
	elsif (/search_string=(\w+\s*\w*)\&ontology/) {
		$word = $1;
		$ontology_searches{lc($word)} ++;
	}
	
	
	chomp;
	# if word is too short
	if(length($word) < $length_minimum) {
		next LINE;
	}
	# if its a stopword
	if($stopwords{$word}) {
		next LINE;
	}
	# take out links to RGD IDs
	if($word =~ /^RGD\:/) {
		next LINE;
	}
	
	$word = lc($word);
	
	# otherwise count it.
	$keywords{$word} ++;
}


print <<"html_css";
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<style>
$css
</style>
<body>
<div id="tag-cloud-container">

html_css

if(defined $opt_k || defined $opt_a) {
	print output_cloud(\%keywords,8,2,"Popular searches on RGD:");
}

if(defined $opt_q || defined $opt_a) {
	print output_cloud(\%quick_searches,3,4," Keywords and concepts from Quick Search:");
}

if(defined $opt_g || defined $opt_a) {
	print output_cloud(\%gene_searches,1,1," Keywords and concepts from Gene Search:");
}

if(defined $opt_b || defined $opt_a) {
	print output_cloud(\%ontology_searches,1,2," Keywords and concepts from Ontology Browser:");
}

if(defined $opt_v || defined $opt_a) {
	print output_cloud(\%ontology_views,13,5," Keywords and concepts from Ontology Viewer:");
}

print <<"html_css";
 <div id="tag-cloud-footer">
    This is a list of popular keywords that have been used to search RGD.  Terms found more often are larger.
  </div>
</div>

</body>
</html>
html_css

sub output_cloud {

	my $hash_ref = shift(@_);
	my $min = shift (@_);
	my $divide_by = shift(@_);
	my $title = shift (@_);
	
	my $result = "<HR><BR><div id=\"tag-cloud-title\">$title";
	
	
	if(defined $opt_t) {
		$result .= " (only terms occuring more than $min times are shown)";
	}
	
	$result .= "</div>";
	
	KW:
foreach my $kw ( sort keys %{$hash_ref}) {
	if($hash_ref->{$kw} <= $min) {
		next KW;
	}
	
	my $rank = int($hash_ref->{$kw}/$divide_by);
	if($hash_ref->{$kw} > 80) {
		$rank = 16;
	}
	
	my $print_kw = ucfirst($kw);
	
	$result .= "<a class=\"tag_cloud tag_cloud_frequency_$rank tag_cloud_recency_100\" href=\"/generalSearch/RgdSearch.jsp?quickSearch=1&searchKeyword=$print_kw\" title=\"$print_kw ($hash_ref->{$kw})\">$print_kw</a>\n";
}

	return $result;

}

sub init_css {

	$css = <<"eocss";

body {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  padding: 10px;
}

.logolink {
  border: none;
}

#home-header {
  height: 69px;
}

#connotea-logo-home {
  float: left;
}

#login-out-and-search {
  text-align: right;
  margin-left: 157px;
}

#login-out {
  height: 23px;
  font-size: 14px;
  margin: 0px;
}

a.mylibrary-home {
  color: #c03;
  font-weight: bold;
  text-decoration: none;
}

a.mylibrary-home:hover {
  color: #c03;
  font-weight: bold;
  text-decoration: underline;
}

#search-home {
  background: #97A9B7 url(searchgradient.png) no-repeat;
  height: 28px;
  line-height: 28px;
  padding: 0px;
  color: #C2D2DE;
  font-size: 14px;
  font-weight: bold;
  padding-right: 10px;
  margin: 0px;
}

.search-home-text-ctl { 
  border: 1px solid #233155;
  background: #fff; 
  font-size: 10px;
  margin-top: 4px;
}

.search-home-pulldown-ctl { 
  border: 1px solid #233155;
  background: #fff; 
  font-size: 10px;
  margin-top: 4px;
}

.search-home-button-ctl {
  border: 1px outset;
  background: #c03;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
}


#bar-and-blurb-container {
  margin-top: 15px;
}

#bar-and-blurb {
}

#left-bar-and-blurb {
  float: left;
  width: 497px;
}

#right-bar-and-blurb {
  margin-left: 501px;
}

#left-bar {
  background: #97A9B7;
  color: #fff;
  height: 23px;
  font-size: 12px;
  font-weight: bold;
}

#right-bar {
  background: #c03;
  color: #fff;
  height: 23px;
  font-size: 12px;
  font-weight: bold;
}

.bar-item {
  float: left;
  padding-top: 4px;
  padding-left: 6px;
}

a.barlink {
  text-decoration: none;
  color: #fff;
}

a.barlink:hover {
  text-decoration: underline;
  color: #fff;
}

#osd-images {
  width: 497px;
  max-height: 145px;
  padding: 0px;
  margin: 0px;
}

#organize {
  padding-top: 149px;
  background: url(organize.jpg) no-repeat;
  width: 163px; 
  float: left;
  margin: 0px;
}

#discover {
  padding-top: 149px;
  background: url(discover.jpg) no-repeat;
  width: 163px; 
  float: left;
  margin: 0px;
}

#share {
  padding-top: 149px;
  background: url(share.jpg) no-repeat;
  width: 163px;
  float: left;
  margin-left: 4px;
  margin-right: 4px;
}

#home-blurb-container {
  height: 149px;
  background: #f5f5f5;
}

.home-blurb {
  padding-top: 8px;
  padding-left: 12px;
  font-family: Tahoma, sans-serif;
  font-size: 19px;
  color: #5E7A88;
  line-height: 23px;
}

a.blurblink {
  color: #c03;
  text-decoration: underline;
}


#share-caption {
  width: 163px;
  height: 57px;
  background: #97A9B7;
  font-family: Arial, sans-serif;
  color: #fff;
  text-align: center;
  padding: 0px;
}

#organize-caption, #discover-caption {
  width: 163px;
  height: 57px;
  background: #97A9B7;
  font-family: Arial, sans-serif;
  color: #fff;
  text-align: center;
  padding: 0px;
}

.caption-word {
  font-family: Tahoma, sans-serif;
  font-size: 26px;
//  padding-top: 2px; 
}

#nature-com-bar {
  height: 57px;
  background: #E7E9EB;
}

#nature-com-logo {
  float: right;
  margin-top: 36px;
}

#tag-cloud-container {
  margin-top: 30px;
  
}

#tag-cloud-title {
  color: #C62031;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

#tag-cloud {
  text-align: center;
}


a.tag_cloud { font-weight: bold; text-decoration: none; line-height: 30px; margin: 0 3px 0 3px }
a.tag_cloud:hover { text-decoration: underline; color: black }

<!--
a.tag_cloud_frequency_0 { font-size: 8px }
a.tag_cloud_frequency_1 { font-size: 10px }
a.tag_cloud_frequency_2 { font-size: 13px }
a.tag_cloud_frequency_3 { font-size: 15px }
a.tag_cloud_frequency_4 { font-size: 17px }
a.tag_cloud_frequency_5 { font-size: 19px }
a.tag_cloud_frequency_6 { font-size: 22px }
a.tag_cloud_frequency_7 { font-size: 24px }
a.tag_cloud_frequency_8 { font-size: 26px }
a.tag_cloud_frequency_9 { font-size: 28px }
a.tag_cloud_frequency_10 { font-size: 28px }
a.tag_cloud_frequency_11 { font-size: 30px }
a.tag_cloud_frequency_12 { font-size: 32px }
a.tag_cloud_frequency_13 { font-size: 33px }
a.tag_cloud_frequency_14 { font-size: 34px }
a.tag_cloud_frequency_15 { font-size: 35px }
a.tag_cloud_frequency_16 { font-size: 36px }
-->

a.tag_cloud_frequency_4 { font-size: 8px }
a.tag_cloud_frequency_5 { font-size: 10px }
a.tag_cloud_frequency_6 { font-size: 12px }
a.tag_cloud_frequency_7 { font-size: 13px }
a.tag_cloud_frequency_8 { font-size: 14px }
a.tag_cloud_frequency_9 { font-size: 16px }
a.tag_cloud_frequency_10 { font-size: 18px }
a.tag_cloud_frequency_11 { font-size: 20px }
a.tag_cloud_frequency_12 { font-size: 22px }
a.tag_cloud_frequency_13 { font-size: 24px }
a.tag_cloud_frequency_14 { font-size: 26px }
a.tag_cloud_frequency_15 { font-size: 30px }
a.tag_cloud_frequency_16 { font-size: 32px }
a.tag_cloud_frequency_17 { font-size: 33px }
a.tag_cloud_frequency_18 { font-size: 34px }
a.tag_cloud_frequency_19 { font-size: 35px }
a.tag_cloud_frequency_20 { font-size: 36px }

a.tag_cloud_recency_4 { color: #5B7884 }
a.tag_cloud_recency_5 { color: #5B7884 }
a.tag_cloud_recency_6 { color: #5B7884 }
a.tag_cloud_recency_7 { color: #94AAB5 }
a.tag_cloud_recency_8 { color: #9B63BB }
a.tag_cloud_recency_9 { color: #BB78B1 }
a.tag_cloud_recency_10 { color: #E26663 }
a.tag_cloud_recency_11 { color: #BB3232 }
a.tag_cloud_recency_12 { color: #FF8499 }
a.tag_cloud_recency_13 { color: #FF8499 }
a.tag_cloud_recency_14 { color: #EA1A29 } 
a.tag_cloud_recency_100 { color: #3A84BA }

#tag-cloud-footer {
  background: #E5E9EB;
  font-size: 10px;
  color: #5B7784;
  padding: 4px;
  margin-top: 15px;
}

#home-footer {
  margin-top: 20px;
}

a.copyfooter {
  color: #c03;
  text-decoration: underline;
  font-size: 12px;
}

.clearing {
  height: 0px;
  clear: both;
  padding: 0px;
  margin: 0px;
  font-size: 0px;
}

.white-height {
  height: 4px;
  max-height: 4px;
  padding: 0px;
  margin: 0px;
  font-size: 4px;
}


eocss

}
