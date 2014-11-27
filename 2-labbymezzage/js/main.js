"use strict";
var MyMessages = {
    messages: [], 

   run : function(){
        var submitButton = document.querySelector("button");
        var txtArea = document.querySelector("textarea");
        var numberOfMessages = document.getElementById("numberofmessages");
        numberOfMessages.innerHTML = 'Antal meddelanden: 0';
        var newMessage;
        
        txtArea.onkeydown = function(e){
            if(e.keyCode === 13 && !e.shiftKey){
                createNewMessage();
            }
        };
        
        
        submitButton.addEventListener("click", function(e){
            createNewMessage();
        });
        
        function createNewMessage(){
            var chatMessage = document.querySelector("textarea");
            
            newMessage = new Message(chatMessage.value, new Date());
            MyMessages.messages.push(newMessage);
            console.log(newMessage.getHTMLText());
            numberOfMessages.innerHTML = 'Antal meddelanden: ' + MyMessages.messages.length;
            
            addMessageToList();
            txtArea.value ="";
        }
        
        function addMessageToList(){
            var listOfMessages = document.getElementById("listofmessages");
            var article = document.createElement("article");
            listOfMessages.appendChild(article); 
            
            var p = document.createElement("p");
            p.id = "chatTxt";
            p.innerHTML = newMessage.getHTMLText();
            article.appendChild(p);
              
        }
    }
};
window.onload = MyMessages.run;