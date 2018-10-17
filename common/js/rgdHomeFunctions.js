
function verify(f)
{
    if(f.searchKeyword.value == null ||f.searchKeyword.value == "" || f.searchKeyword.value == " * for wildcard"){
        alert("The form was not submitted because you have to enter a keyword to search on;");
        return false;
    }else{
        return true;
    }
}

function getTabIndex() {
    var menuMap = new Array(new Array(0), new Array("/data-entry", "/report", "/genes", "/objectSearch","/GO", "/strains","/ests", "/maps",  "/sequences", "/references", "/data-menu", "/ontology"), new Array("/tool-entry", "/VCMAP", "/ontoloty", "/gviewer",  "/sequenceresource", "/ACPHAPLOTYPER" ,"/METAGENE", "/GENOMESCANNER", "/tool-menu","/plfRGD", "gbreport","GenomeErrorReport"), new Array("/tools/Diseases","/dportal","/portal") , new Array("/physiology","/rgdweb/termSelection","/rgdweb/dataTable"), new Array("nomen","registration-entry","/community-entry","/com-menu","resource-links"));
	var index=0;

	for (i=0; i< menuMap.length; i++) {
		for (j=0; j< menuMap[i].length; j++) {
		        //alert(document.location.href + " " + menuMap[i][j]);
                        //if (ddtabmenu.currentpageurl.indexOf(menuMap[i][j]) != -1) {
                        if (document.location.href.indexOf(menuMap[i][j]) != -1) {
 				return i;
			}
		}
	}
     return index; 
}

