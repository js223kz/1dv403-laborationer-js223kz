"use strict";

var JOSZEP = JOSZEP || {};
JOSZEP.windows = JOSZEP.windows || {};
JOSZEP.windows.defaultWindow = JOSZEP.windows.defaultWindow || {
    windowsArray : [],
    
    init: function(){
        var thumbNailsBtn = document.getElementById("thumbnailsbutton");
        thumbNailsBtn.addEventListener("click", function(){
            var newThumbNailWin = new JOSZEP.windows.templateWindow.init();
        });
    }
};
window.onload = JOSZEP.windows.defaultWindow.init;
