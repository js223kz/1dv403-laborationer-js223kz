"use strict";

var JOSZEP = {
    
    createThumbNailWindow : function(id, positionX, positionY, headLine){
    response: [];    
        function callJson(){
            var AJAX_req = new XMLHttpRequest();
            AJAX_req.open( "GET","https://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
            AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                this.response = JSON.parse(AJAX_req.responseText);
                //renderGridLayout(response, templateWindow);
                //templateWindow.querySelector(".activityindicator").style.display = "none";
            }
        };
    AJAX_req.send(null);
        }
        
        
        
    }
    
    
};
