"use strict";

function TemplateWindow(id, positionX, positionY){
    this.id = id;
    this.positionX = positionX + "px";
    this.positionY = positionY + "px";
    this.response;
    var body = document.querySelector("body");
    var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "templatewrapper");
        wrapper.id = this.id;
        wrapper.style.left = this.positionY;
        wrapper.style.top = this.positionX;
                       
        body.appendChild(wrapper);
                    
    var template = document.querySelector(".templatewindow").innerHTML;
    Mustache.parse(template);
                    
    var view ={
        text: "Placeholdertext",
    };
    wrapper.innerHTML = Mustache.render(template, view);
                    
    var currentWindow = document.getElementById(this.id);
    var closeBtn = currentWindow.querySelector(".templateclosebutton");
        closeBtn.addEventListener("click", function(){
            TemplateWindow.prototype.closeWindow(currentWindow);
        });

}
TemplateWindow.prototype.getId = function(){
    return this.id;
}
TemplateWindow.prototype.getPositionX = function(){
    return this.positionX;
}
TemplateWindow.prototype.getPositionY = function(){
    return this.positionY;
}

TemplateWindow.prototype.closeWindow = function (currentWindow){
    currentWindow.remove();
};
TemplateWindow.prototype.getJsonCall = function(url){
    var AJAX_req = new XMLHttpRequest();
        AJAX_req.open( "GET",url, true);
        
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
            this.response = JSON.parse(AJAX_req.responseText);
            return this.response;    
            }
        };
        AJAX_req.send();
        
};


