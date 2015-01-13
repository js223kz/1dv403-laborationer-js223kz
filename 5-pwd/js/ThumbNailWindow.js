"use strict";
function ThumbNailWindow(id, positionX, positionY, headLine){
    TemplateWindow.call(this, id, positionX, positionY, headLine); 
    
}
ThumbNailWindow.prototype = new TemplateWindow();

ThumbNailWindow.prototype.renderContent = function (){
    var templateWindow = document.getElementById(this.id);
    var templateContent = templateWindow.querySelector(".templatecontent");
    var imageWrapper = null;
    var jsonArray = [];
    var maxWidth = 0;
    var maxHeight = 0;
    var AJAX_req = new XMLHttpRequest();
        AJAX_req.open( "GET","https://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
        AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                jsonArray = JSON.parse(AJAX_req.responseText);
                
                jsonArray.forEach(function(item){
                     if(item.thumbWidth > maxWidth){
                        maxWidth = item.thumbWidth;
                    }
                     if(item.thumbHeight > maxHeight){
                        maxHeight = item.thumbWidth;
                    }
                })
                jsonArray.forEach(function(item){
                   
                    imageWrapper = document.createElement("div");
                    imageWrapper.setAttribute("class", "imagewrapper"); 
                    imageWrapper.style.width = maxWidth + 5 + "px";
                    imageWrapper.style.height = maxHeight + 5 + "px";   
                
                var thumbNailImage = document.createElement("img");
                    thumbNailImage.setAttribute("class", "thumbnailimage");
                    thumbNailImage.src = item.thumbURL;
                     
                    
                    thumbNailImage.addEventListener("click", function(e){
                        changeBackground(item.URL);
                    }); 
                    console.log(maxWidth);
                    
                    imageWrapper.appendChild(thumbNailImage);
                    templateContent.appendChild(imageWrapper);
                });
                   
                templateWindow.querySelector(".activityindicator").style.display = "none";
            }
        };
    AJAX_req.send(null); 

    function changeBackground(itemUrl){
        var url = itemUrl;
        document.body.style.backgroundImage = "url("+ url +")";
     }
};