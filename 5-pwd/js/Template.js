"use strict";
var JOSZEP = {
    
    createTemplate : function(id, positionX, positionY, width, height){
        
    var body = document.querySelector("body");
    var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "templatewrapper");
        wrapper.id = this.id;
        wrapper.style.left = this.positionY;
        wrapper.style.top = this.positionX;
        wrapper.style.height = height;
        wrapper.style.width = width;
                       
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
};