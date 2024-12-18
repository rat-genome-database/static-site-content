#!/usr/bin/perl

##
##
##
# Basic GViewer CGI Form to create customized annotation
#
# Takes annotaiton and basic configuration parameters from
# web form and returns HTML page including the annotation as
# an inline XML dataset.
# 
# Doesnt handle flash plugin detection, etc.
#
#	Simon Twigger, 2005
#
#
##
##

use strict;
use CGI;

######## CONFIGURATION DETAILS #######
#
#

# absolute URL pointing to GViewer directory holding movie and data

my $pathToGViewerWebDir = "/Gviewer";

# absolute URL pointing to GViewer style sheet, probably the same as the webdir, above. 
my $pathToStyleSheet = "/Gviewer"; 

## flash tag template for HTML page
my $flashTagHTML = <<"eoflash";

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="%s" height="%s" id="GViewer2" align="middle">
           <param name="allowScriptAccess" value="sameDomain" />
           <param name="movie" value="$pathToGViewerWebDir/GViewer2.swf" />
           <param name="quality" value="high" />
           <param name="bgcolor" value="%s" />
           <param name="FlashVars" value="&baseMapURL=$pathToGViewerWebDir/data/%s&annotationXML=%s&dimmedChromosomeAlpha=40&bandDisplayColor=%s&wedgeDisplayColor=%s&" />

           <embed src="$pathToGViewerWebDir/GViewer2.swf" quality="high" bgcolor="%s" width="%s" height="%s" name="GViewer2" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" FlashVars="&baseMapURL=$pathToGViewerWebDir/data/%s&annotationXML=%s&dimmedChromosomeAlpha=40&bandDisplayColor=%s&wedgeDisplayColor=%s"  pluginspage="http://www.macromedia.com/go/getflashplayer" />       
  </object>

eoflash

# basic HTML template to contain flash movie
my $basicPageTemplate = <<"eoHTML";
Content-type: text/html


<html>
<head>
	<title>GViewer Annotation Display</title>
	<link href="$pathToStyleSheet/gviewer_styles.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="titleText">GViewer Annotation Display</div></h2>

<!-- insert flash HTML below here -->
%s
<!-- end of flash HTML insert

</body>
</html>

eoHTML

#
#
######################################


my $form = CGI->new;

# Annotation File and Base Map parameters
my $annotationData = $form->param("annotationData");
my $annotationFile = $form->param("annotationFile");

# Need to add in file/annotation data text handling to
# to create the appropriate XML to include in the HTML tags

my $annotationXML  = "";

if($annotationData) {
	$annotationXML = parse_tab_fields($annotationData);
}
elsif ($annotationFile) {
	$annotationXML = parse_file($annotationFile);
}

my $baseMap = $form->param("baseMap");

# Color Scheme parameters
my $backgroundColor = $form->param("backgroundColor") or "#FFFFFF";
my $barColor = $form->param("barColor") or "0x0099FF";
my $wedgeColor = $form->param("wedgeColor")  or "0xCC0000";

# Convert HTML color codes from color picker into Flash colors
if($barColor =~ /^\#\w+/) {
	$barColor =~ s/\#/0x/;
}
if($wedgeColor =~ /^\#\w+/) {
	$wedgeColor =~ s/\#/0x/;
}

# GViewer flash movie parameters
my $displaySize = $form->param("displaySize") or "normal";
my $width = 500;
my $height = 400;

if($displaySize eq "large") {
	$width = 750;
	$height = 675;
}
elsif ($displaySize eq "extra-large") {
	$width = 1000;
	$height = 800;
}

my $completedFlashTags = createFlashHTML(
							$width,
							$height,
							$backgroundColor,
							$baseMap,
							$annotationXML,
							$barColor,
							$wedgeColor
						);

# combine the completed flash tag with the HTML template
# and return back to the browser.
print sprintf($basicPageTemplate, $completedFlashTags);


## _____End of main program ____ ##


##
# Simple subroutine to parse the delimited text from the annotation file
# Uses tab as delimiter currently, might want to add in comma and/or pipe
# to allow users to type in form more easily (tab takes you to the next
# field...
##

sub parse_file {

	my $file = shift @_;
	my $xml = "<?xml version='1.0' standalone='yes' ?><genome>";
	
	while (<$annotationFile>) {
	
		my $line = $_;
	
		my ($chr, $start, $stop, $type, $label, $link) = split(/\t/,$line);
		
		$xml .= "<feature><chromosome>$chr</chromosome><start>$start</start><end>$stop</end><type>$type</type><label>$label</label><link>$link</link></feature>";
		
	}
	
	$xml .= "</genome>";
	
	return $xml;


}


##
# Simple subroutine to parse the delimited text from the form
# Uses tab as delimiter currently, might want to add in comma and/or pipe
# to allow users to type in form more easily (tab takes you to the next
# field...
##

sub parse_tab_fields {

	my $input = shift @_;
	
	my @lines = split(/\n/, $input);
	
	# start XML doc with opening tags
	my $xml = "<?xml version='1.0' standalone='yes' ?><genome>";
	
	foreach my $line (0 .. $#lines) {
	
		my ($chr, $start, $stop, $type, $label, $link) = split(/\t/,$lines[$line]);
		
		$xml .= "<feature><chromosome>$chr</chromosome><start>$start</start><end>$stop</end><type>$type</type><label>$label</label><link>$link</link></feature>";
		
	
	}
	
	# Finish off XML doc
	$xml .= "</genome>";
	
	return $xml;

}


# Configuration values are passed in to the subroutine,
# and then combined with the HTML template to create the customized
# HTML tag that gets inserted into the main webpage
# returned back to the browser.

sub createFlashHTML {

	my ($width, $height, $bgcolor, $baseMapFile, $annotationXML, $barColor, $wedgeColor) = @_;

	# create HTML tag by inserting values into the flashTagHTML string using sprintf
	my $flashHTML = sprintf($flashTagHTML,
		$width,
		$height,
		$bgcolor,
		$baseMapFile,
		$annotationXML,
		$barColor,
		$wedgeColor,
		
		$bgcolor,
		$width,
		$height,
		$baseMapFile,
		$annotationXML,
		$barColor,
		$wedgeColor,
	);

	return $flashHTML;
	
}