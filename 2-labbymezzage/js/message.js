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
    return this.getText().replace((/(\n)+/g, '<br />'));
};

Message.prototype.getDateText = function(){
    
};