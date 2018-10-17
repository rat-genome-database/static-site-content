  // this function is needed to work around 
  // a bug in IE related to element attributes
  function hasClass(obj) {
     var result = false;
     if (obj.getAttributeNode("class") != null) {
         result = obj.getAttributeNode("class").value;
     }
     return result;
  }   

 function stripeTables(id) {

    // the flag we'll use to keep track of 
    // whether the current row is odd or even
    var even = false;
  
	// Set the alternate color in the method call arguments
	var evenColor; 
	
	
	
	
	
	// hard coded here and applies to all tables.
	/*
	*********
	*********
	*/
	
    var oddColor = "#eee";
	
    /*
	*********
	*********
	*/ 
	// hard coded here and applies to all tables.
	
	
	
	
	 
	 // Populate 2 arrays with the arguments,
	 // separating the colors from the ID's.
	 var colorArray = new Array();
	 var cArrayCount = 0;
	 
	 var IdArray = new Array();
	 var IdArrayCount = 0;
	 
	 // This script assumes that the arguements always
	 // come in pairs: ID / evenColor. So the first
	 // argument will always be the ID.
	 for (i_id = 0; i_id < arguments.length; i_id++) {
	 	
		// Since the function arguments are formatted in ID/color pairs,
		// and the first argument is an ID, when %2 == 0 
		// it will be a element ID and not a color.
		if (i_id%2 == 0) {
			IdArray[IdArrayCount] = arguments[i_id];
			IdArrayCount++;
		}
		else {
			colorArray[cArrayCount] = arguments[i_id];
			cArrayCount++;			
		}
	 }
	 // Populate 2 arrays with arguments
	 
	 
	 
	 
	 /*
	 // Testing code for the arrays
	 alert("Color Array has: "+ colorArray.length);
	 alert("ID Array has: "+IdArray.length);
	 
	 for (a = 0; a < colorArray.length; a++) {
	 	alert(colorArray[a]);	 	
	 }
	 
	  for (a = 0; a < IdArray.length; a++) {
	 	alert(IdArray[a]);	 	
	 }
	 // Testing code for the arrays
	 */
	 
	
	
	 // color the rows for each table as defined in the function arguments
	 for (a = 0; a < IdArray.length; a++) {	 	 
		  		 
		 	     evenColor = colorArray[a]; 		
		 			 
		 		// obtain a reference to the desired table
				// if no such table exists, abort
				var table = document.getElementById(IdArray[a]);
				if (! table) { return; }		 
				
				
				// by definition, tables can have more than one tbody
				// element, so we'll have to get the list of child
				// &lt;tbody&gt;s 
				var tbodies = table.getElementsByTagName("tbody");
			
				// and iterate through them...
				for (var h = 0; h < tbodies.length; h++) {
				
				 // find all the &lt;tr&gt; elements... 
				  var trs = tbodies[h].getElementsByTagName("tr");
				  
				  // ... and iterate through them
				  for (var i = 0; i < trs.length; i++) {
			
					// avoid rows that have a class attribute
					// or backgroundColor style
					if (! hasClass(trs[i]) &&
						! trs[i].style.backgroundColor) {
					  
					  // get all the cells in this row...
					  var tds = trs[i].getElementsByTagName("td");
					
					  // and iterate through them...
					  for (var j = 0; j < tds.length; j++) {
					
						var mytd = tds[j];
			
						// avoid cells that have a class attribute
						// or backgroundColor style
						if (! hasClass(mytd) &&
							! mytd.style.backgroundColor) {
					
						  mytd.style.backgroundColor =
							even ? evenColor : oddColor;
						
						}
					  }
					}
					// flip from odd to even, or vice-versa
					even =  ! even;
				  }
				}
		} // for loop		
  }
