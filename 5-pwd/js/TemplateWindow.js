"use strict";

function TemplateWindow(id, positionX, positionY){
    this.id = id;
    this.positionX = positionX + "px";
    this.positionY = positionY + "px";
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


