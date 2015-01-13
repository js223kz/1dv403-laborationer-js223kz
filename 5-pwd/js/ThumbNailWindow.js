"use strict";
function ThumbNailWindow(id, positionX, positionY, headLine){
    TemplateWindow.call(this, id, positionX, positionY, headLine); 
}

ThumbNailWindow.prototype = new TemplateWindow();

ThumbNailWindow.prototype.fillContent = function (){
    var response = null;
    var body = document.querySelector("body");
    var templateWindow = document.getElementById(this.id);
    var templateContent = templateWindow.querySelector(".templatecontent");
    templateContent.style.height = "370px";

    templateWindow.addEventListener("click", function(e){
        body.appendChild(templateWindow);
    });
    
    var AJAX_req = new XMLHttpRequest();
        AJAX_req.open( "GET","https://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
        AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                ThumbNailWindow.prototype.renderContent(response, templateContent);
                templateWindow.querySelector(".activityindicator").style.display = "none";
            }
        };
    AJAX_req.send(null); 
};

ThumbNailWindow.prototype.renderContent = function (response, templateContent){
    var jsonArray = [];
   
    for(var item in response){
       jsonArray.push({URL:response[item].URL, thumbURL:response[item].thumbURL, width:response[item].width, height: response[item].height});
    }
    
    renderGridLayout();
    
    function renderGridLayout(){
        
        var thumbNailWrapper = document.createElement("div");
        thumbNailWrapper.setAttribute("class", "thumbnailwrapper");
        templateContent.appendChild(thumbNailWrapper);
        var numberOfRows = Math.ceil(jsonArray.length / 3);
        var rows = 0;
        var columns = 0;
        
        for(rows = 0; rows < numberOfRows; rows++){
            for(columns=0; columns < 3; columns++){
                createThumbNails(rows, columns, thumbNailWrapper);
            }
        }    
    }
    function createThumbNails(rows, cols, thumbNailTable){
        var position = rows*3 + cols;
    
        var imageWrapper = document.createElement("div");
            imageWrapper.setAttribute("class", "imagewrapper");
        
        var thumbNailImage = document.createElement("img");
            thumbNailImage.setAttribute("class", "thumbnailimage");
            thumbNailImage.src = jsonArray[position].thumbURL;
            
            thumbNailImage.addEventListener("click", function(e){
                var positionX = 200;
                var positionY = 400;
                var date = new Date();
                var newWindow = new ImageWindow(date.getTime(), positionX, positionY, "Vald Bild");
                newWindow.renderTemplate();
                newWindow.fillContent(jsonArray[position].URL, jsonArray[position].width, jsonArray[position].height);
            }); 
        
        imageWrapper.appendChild(thumbNailImage);
        thumbNailTable.appendChild(imageWrapper);      
    }
};