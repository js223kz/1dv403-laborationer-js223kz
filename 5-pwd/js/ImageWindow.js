"use strict";

function ImageWindow(id, positionX, positionY, headLine){
    TemplateWindow.call(this, id, positionX, positionY, headLine);
}
ImageWindow.prototype = new TemplateWindow();

ImageWindow.prototype.fillContent = function (image, width, height){
    var response = null;
    var body = document.querySelector("body");
    
    var templateWindow = document.getElementById(this.id);
        templateWindow.style.width = "auto";
        templateWindow.style.height = "auto";
    
    
    var templateContent = templateWindow.querySelector(".templatecontent");
        templateContent.style.height = "auto";

    templateWindow.addEventListener("click", function(e){
        body.appendChild(templateWindow);
    });
    var AJAX_req = new XMLHttpRequest();
        AJAX_req.open( "GET","https://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
        AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                ImageWindow.prototype.renderContent(image, templateContent, width, height);
                templateWindow.querySelector(".activityindicator").style.display = "none";
            }
        };
    AJAX_req.send(null);

};

ImageWindow.prototype.renderContent = function (response, templateContent, imageWidth, imageHeight){

    setImage();
    
    function setImage(){
        
        var image = document.createElement("img");
        image.src = response;
        image.style.width = imageWidth + "px";
        image.style.height = imageHeight + "px";
        
        templateContent.appendChild(image);
        
    }
    
};