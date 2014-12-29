
"use strict";

var JOSZEP = JOSZEP || {};
JOSZEP.windows = JOSZEP.windows || {};
JOSZEP.windows.templateWindow = JOSZEP.windows.templateWindow || {
    
    init: function(){
        var body = document.querySelector("body");
       var template = document.createElement("div");
       template.setAttribute("class", "wrapper");
       body.appendChild(template);
       

    }
};