"use strict";

var JOSZEP = JOSZEP || {};
JOSZEP.startWindow = JOSZEP.startWindow || {
    windowsArray : [],
    
    
    init: function(){
        var thumbNailsBtn = document.getElementById("thumbnailsbutton");
        var positionX = 0;
        var positionY = 0;
        
        thumbNailsBtn.addEventListener("click", function(){
            positionX += 30;
            positionY += 30;
            var newThumbNailWin = new JOSZEP.imageWindow.init(new Date(), positionX, positionY);

        });
    }
};
window.onload = JOSZEP.startWindow.init;
