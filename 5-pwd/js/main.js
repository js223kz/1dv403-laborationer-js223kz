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
            var date = new Date();
            var windowEnd = (height-490);
            
            if(positionY > windowEnd){
                positionY = 30;
                positionX = 30;
            }else{
               
            }
            newWindow = new ThumbNailWindow(date.getTime(), positionX, positionY, "ImageViewer");
            newWindow.renderTemplate();
            newWindow.renderContent();
        });
       
    }
};
window.onload = JOSZEP.startWindow.init;