"use strict";

function ImageWindow(id, positionX, positionY){
    TemplateWindow.call(this, id, positionX, positionY); 

    var containerWindow = document.getElementById(this.id);
    var containerContent = containerWindow.querySelector(".templatecontent");
     var response;
    
    this.createWindow = function(){
       
        var AJAX_req = new XMLHttpRequest();
            AJAX_req.open( "GET","https://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
        AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                ImageWindow.prototype.renderContent(response, containerContent); 
            }
        };
        AJAX_req.send(); 
        };
      
}
ImageWindow.prototype = Object.create(TemplateWindow.prototype);
ImageWindow.prototype.constructor = ImageWindow;


ImageWindow.prototype.renderContent = function(response, containerContent){
    var jsonArray = [];
    var j = 0;
    var i = 0;

    for(var item in response){
       jsonArray.push({URL:response[item].URL, thumbURL:response[item].thumbURL});
    }
    
    jsonArray.forEach(function(item){
        console.log(item.URL);
    });
    
    var rows = Math.ceil(jsonArray.length / 3);

    var thumbnailTable = document.createElement("table");
        thumbnailTable.setAttribute("class", "thumbnailTable");
    var thumbnailContainer = document.createElement("tr");
        thumbnailContainer.setAttribute("class", "thumbnailcontainer");
    var thumbnailImage = document.createElement("td");
        thumbnailImage.setAttribute("class", "thumbnailimage");
    
    for(i = 0; i < 3; i++){
        containerContent.appendChild(thumbnailContainer);
            
            for(j=0; j < rows; j++){
                thumbnailContainer.appendChild(thumbnailImage);
                   
            }
        }    
    
        
};

