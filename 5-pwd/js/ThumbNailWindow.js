"use strict";

function ImageWindow(id, positionX, positionY, headLine){
    TemplateWindow.call(this, id, positionX, positionY, headLine); 

    var templateWindow = document.getElementById(this.id);
    var templateContent = templateWindow.querySelector(".templatecontent");
    var response;
   
    
    this.createWindow = function(){
       
        var AJAX_req = new XMLHttpRequest();
            AJAX_req.open( "GET","https://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
        AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                ImageWindow.prototype.renderContent(response, templateContent); 
            }
        };
        AJAX_req.send(); 
        };
      
}
ImageWindow.prototype = Object.create(TemplateWindow.prototype);
ImageWindow.prototype.constructor = ImageWindow;

ImageWindow.prototype.renderContent = function(response, templateContent){
    var jsonArray = [];
   
    for(var item in response){
       jsonArray.push({URL:response[item].URL, thumbURL:response[item].thumbURL});
    }
    
    renderGridLayout();
    
    function renderGridLayout(){
        
        var thumbNailTable = document.createElement("table");
            thumbNailTable.setAttribute("class", "thumbnailtable");
            templateContent.appendChild(thumbNailTable);
        
        var numberOfRows = Math.ceil(jsonArray.length / 3);
        var rows = 0;
        var columns = 0;
        
        for(rows = 0; rows < numberOfRows; rows++){
            for(columns=0; columns < 3; columns++){
                createThumbNails(rows, columns, thumbNailTable);
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
            
        var backgroundImage = document.querySelector("html");
            
            thumbNailImage.addEventListener("click", function(e){
                //backgroundImage.background.style = jsonArray[position].URL;
                console.log("hello");
            });     
                                
            imageWrapper.appendChild(thumbNailImage);
            thumbNailTable.appendChild(imageWrapper);      
    }
};

