"use strict";
function ThumbNailWindow(id, positionX, positionY, headLine){
    TemplateWindow.call(this, id, positionX, positionY, headLine); 
    
}
ThumbNailWindow.prototype = new TemplateWindow();

ThumbNailWindow.prototype.renderContent = function (){
    var templateWindow = document.getElementById(this.id);
    
    var response = null;
    var jsonArray = [];

    var AJAX_req = new XMLHttpRequest();
        AJAX_req.open( "GET","https://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
        AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                renderGridLayout(response);
                templateWindow.querySelector(".activityindicator").style.display = "none";
            }
        };
    AJAX_req.send(null); 
    
    function renderGridLayout(response){
        
        for(var item in response){
            jsonArray.push({URL:response[item].URL, thumbURL:response[item].thumbURL, width:response[item].width, height: response[item].height});
        }

        var numberOfRows = Math.ceil(jsonArray.length / 3);
        var rows = 0;
        var columns = 0;
        
        for(rows = 0; rows < numberOfRows; rows++){
            for(columns=0; columns < 3; columns++){
                renderThumbNails(rows, columns);
            }
        }
     function renderThumbNails(rows, cols){
        var position = rows*3 + columns;
        var templateContent = templateWindow.querySelector(".templatecontent");
        var imageWrapper = document.createElement("div");
            imageWrapper.setAttribute("class", "imagewrapper");

        var thumbNailImage = document.createElement("img");
            thumbNailImage.setAttribute("class", "thumbnailimage");
            thumbNailImage.src = jsonArray[position].thumbURL;
        
            thumbNailImage.addEventListener("click", function(e){
               changeBackground(position);
            });    
        imageWrapper.appendChild(thumbNailImage);
        templateContent.appendChild(imageWrapper);  
     }  
        
    function changeBackground(position){
        var url = jsonArray[position].URL;
        console.log(url);
        var req = new XMLHttpRequest();
        req.open( "GET",url, true);
        req.setRequestHeader('Access-Control-Allow-Origin', '*', "text/html");
        req.onreadystatechange = function(){
            if( req.readyState == 4 && req.status == 200){
                var image = JSON.parse(req.responseText);
                
                document.body.style.background="url('image') repeat top right";
            }
        };
    req.send(null);
    }
}
};