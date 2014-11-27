"use strict";

function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    this.getDate = function(){
        return date;
    };
    
    this.setText = function(_message){
        message = _message;
    };
    this.setDate = function(_date){
        date = _date;
    };
    
    this.setText(message);
    this.setDate(date);
    
    
}
Message.prototype.toString = function(){
    return this.getText() + "(" + this.getDate() + ")";
};

Message.prototype.getHTMLText = function(){
    var htmlTxt = this.getText();
    htmlTxt = htmlTxt.replace(/\r?\n/g, '<br />');

    return htmlTxt;
};

Message.prototype.getDateText = function(){
    return this.getDate().toLocaleTimeString();
};