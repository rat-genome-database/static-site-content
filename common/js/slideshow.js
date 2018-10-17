/*
 * Written by Stefano Mazzocchi <stefanom at mit.edu>
 * With code borrowed from http://www.splintered.co.uk/experiments/archives/javascript_fade/fade.js
 */

var delayInSeconds = 10;

var index;
var size;
var items;
var keepGoing;
var opacity;
var displayedItem;
var itemToDisplay;
var idle = true;

addEvent(window,"load",slideshow);

function slideshow() {
	items = getItems();
	size = items.length;
	index = Math.floor(Math.random() * (size - 1));
	start();
}

function getItems() {
	var items = [];
	var divs = document.getElementById("slideshow").getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++) {
		if (divs[i].className == "item") items.push(divs[i]);
	}
	return items;
}

function start() {
	document.getElementById("stop").style.display = "inline";
	document.getElementById("start").style.display = "none";
	document.getElementById("previous").style.display = "none";
	document.getElementById("next").style.display = "none";
	keepGoing = true;
	beat();
}

function stop() {
	document.getElementById("stop").style.display = "none";
	document.getElementById("start").style.display = "inline";
	document.getElementById("previous").style.display = "inline";
	document.getElementById("next").style.display = "inline";
	keepGoing = false;
}

function beat() {
	if (keepGoing) {
		next();
		window.setTimeout("beat()", 1000 * delayInSeconds);
	}
}

function next() {
	if (index < size - 1) {
		show1(index + 1);
	} else {
		show1(0);
	}
}

function previous() {
	if (index > 0) {
		show1(index - 1); 
	} else {
		show1(size - 1);
	}
}

function show1(newIndex) {
	if (idle) {
		idle = false;
		index = newIndex;
		goOn = show2;
		if (displayedItem) {
			opacity = 100;
			fadeOut(); // this will call goOn() when done fading
		} else {
			goOn();
		}
	}
}

function show2() {
	goOn = show3;
	opacity = 0;
	itemToDisplay = items[index];
	setOpacity(itemToDisplay, opacity);
	itemToDisplay.style.display = "block";
	fadeIn(); // this will call goOn() when done fading
}

function show3() {
	displayedItem = itemToDisplay; // this is the end of our item showing routine
	idle = true;
}
	
function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}


function fadeIn() {
    opacity += 10;
    var iev = getInternetExplorerVersion();
	if (opacity <= 100 && (iev < 1 || iev > 9)) {
		setOpacity(itemToDisplay, opacity);
		window.setTimeout("fadeIn()", 50);
	} else {
		if (goOn) goOn();
	}
}


function fadeOut() {
    opacity -= 10;
    var iev = getInternetExplorerVersion();
	
	if (opacity >= 0 && (iev < 1 || iev > 9)) {
		setOpacity(displayedItem, opacity);
		window.setTimeout("fadeOut()", 50);
	} else {
		displayedItem.style.display = "none";
		if (goOn) goOn();
	}
}



function setOpacity(target, opacity) {
	if (target && opacity <= 100) {
		if (target.style.opacity != null) { // CSS3 compatible
			target.style.opacity = (opacity / 100) - 0.001;
		} else if (target.style.MozOpacity != null) { // Mozilla's pre-CSS3 proprietary rule
			target.style.MozOpacity = (opacity / 100) - 0.001;
			// the .001 fixes a glitch in the opacity calculation which normally results in a flash when reaching 1
		}
		// yes, I know that even IE has a proprietary opacity filter, but unfortunately 
		// it works fine on images, but screws up text rendering completely, so I'm not using it.
	}
}

function addEvent(elm, evType, fn, useCapture)  {
	if (elm.addEventListener){
		elm.addEventListener(evType, fn, useCapture);
		return true;
	} else if (elm.attachEvent){
		var r = elm.attachEvent("on"+evType, fn);
		return r;
	}
} 
