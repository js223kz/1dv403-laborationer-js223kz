"use strict";
var JOSZEP = JOSZEP || {};
JOSZEP.imageWindow = JOSZEP.imageWindow || {
        
        
        init: function(id, positionX, positionY){
        TemplateWindow.call(this, id, positionX, positionY); 
        var that = this;
        var jsonArray = [];
        createWindow();
        getJSON();
        getContent();
            
            function getJSON(){
               var AJAX_req = new XMLHttpRequest();
                AJAX_req.open( "GET","https://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true );
        
                AJAX_req.onreadystatechange = function(){
                    if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                        var response = JSON.parse(AJAX_req.responseText);
                        jsonArray.push(response);
                    }
                };
                AJAX_req.send(); 
            }
            
            
            function createWindow(){
                var body = document.querySelector("body");
                var wrapper = document.createElement("div");
                    wrapper.setAttribute("class", "templatewrapper");
                    wrapper.id = that.id;
                    wrapper.style.left = that.positionY;
                    wrapper.style.top = that.positionX;
                       
                    body.appendChild(wrapper);
                    
                var template = document.querySelector(".templatewindow").innerHTML;
                Mustache.parse(template);
                    
                var view ={
                    text: "Placeholdertext",
                };
                    wrapper.innerHTML = Mustache.render(template, view);
                    
                var currentWindow = document.getElementById(that.id);
                var closeBtn = currentWindow.querySelector(".templateclosebutton");
                closeBtn.addEventListener("click", function(){
                    TemplateWindow.prototype.closeWindow(currentWindow);
                });
            }
            
            function getContent(){
               var currentWindow = document.getElementById(that.id).getElementsByClassName(".templatecontent");
               
                jsonArray.forEach(function(item){
                console.log(item);
                });
     
            }
            
        }
};
JOSZEP.imageWindow.prototype = Object.create(TemplateWindow.prototype);
JOSZEP.imageWindow.prototype.constructor = JOSZEP.imageWindow;


