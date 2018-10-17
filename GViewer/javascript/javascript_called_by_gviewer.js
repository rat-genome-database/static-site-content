// These are functions that the flash GViewer calls when an event happens in
// GViewer. You can redefine them to do something interesting on your page
// in response to these GViewer events.

// Define these if you want to do something when the user clicks on a
// chromosome to zoom or unzoom it. The Flash movie passes the chromosome number
// to these functions when a user clicks on a chromosome to zoom in on it
// or clicks on that chromosome again to zoom out to see the whole genome
// so these could be used to display additional information elsewhere on
// the web page or inject some other Ajax-y goodness into the page
function zoomChromosome(chr) {}
function unzoomChromosome(chr) {}

// this is called by the flash movie and passes back an array of feature names
// for the features that have been selected by the user.

function processSelectedFeatures(features) {
	// Test code to show how this works, you probably want to comment this out
	// or rewrite if you want to do something with this function.
	alert("There are " + features.length + " features selected: " + features.join(', ') );
}

// Function called by flash to display the annotation data, it passes HTML table
// with the annotation data to this function in the data parameter

function displayAnnotationData(data) {
	var generator=window.open('','Annotation Data','height=400,width=600');

	generator.document.write('<html><head><title>Annotation Data</title>');
	generator.document.write('<link rel="stylesheet" href="style.css"/>');
	generator.document.write('</head><body>');
	generator.document.write('<h3>GViewer Annotation Data</h3>');
	generator.document.write(data);
	generator.document.write('<p><a href="javascript:self.close()">Close</a> this window.</p>');
	generator.document.write('</body></html>');
	generator.document.close();
}