"use strict";

var JOSZEP = JOSZEP || {};
JOSZEP.startWindow = JOSZEP.startWindow || {
    windowsArray : [],
    
    init: function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        
        var thumbNailsBtn = document.getElementById("thumbnailsbutton");
        var positionX = 0;
        var positionY = 0;
        var newWindow = null;
        
        thumbNailsBtn.addEventListener("click", function(e){
            e.preventDefault();
            positionX += 30;
            positionY += 30; 
            console.log(positionY);
            var date = new Date();
            var windowEnd = (height-40)/2;
            if(positionY > windowEnd){
                positionY = 0;
                positionX = 0;
                console.log("bigger");
            }else{
               
            }
            newWindow = new ImageWindow(date.getTime(), positionX, positionY, "Byt skrivbordsbild");
        });
       
    }
};
window.onload = JOSZEP.startWindow.init;
