"use strict";
var MyMessages = {
    
    messages: [],
    
    run : function(){
        messages.push(new Message("Meddelande1", new Date())) ;
        var mess2 = new Message("Meddelande2", new Date());
        var mess3 = new Message("Meddelande3", new Date());
        

        console.log(MyMessages.messages[0].getDateText());
    }
};
window.onload = MyMessages.run;