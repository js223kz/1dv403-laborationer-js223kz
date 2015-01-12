"use strict";

function TemplateWindow(id, positionX, positionY, headLine){
    this.id = id;
    this.positionX = positionX + "px";
    this.positionY = positionY + "px";
    this.headLine = headLine;
    console.log(this.id);
    //create template for new window
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
        text: this.headLine,
    };
    wrapper.innerHTML = Mustache.render(template, view);
    
    var currentWindow = document.getElementById(this.id);
    var closeBtn = currentWindow.querySelector(".templateclosebutton");
        
        closeBtn.addEventListener("click", function(e){
           e.cancelBubble = true;
           currentWindow.remove();
       });

}


TemplateWindow.prototype.closeWindow = function (currentWindow){
    currentWindow.remove();
};
TemplateWindow.prototype.getWindowId = function (){
    return this.id;
};
TemplateWindow.prototype.focusWindow = function (id){
    document.getElementById(id).focus();
};
TemplateWindow.prototype.closeWindow = function (currentWindow){
    currentWindow.remove();
};
