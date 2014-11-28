"use strict";
var MyMessages = {
    messages: [], 

   run : function(){
        var submitButton = document.querySelector("button");
        var txtArea = document.querySelector("textarea");
        var numberOfMessages = document.getElementById("numberofmessages");
        numberOfMessages.innerHTML = 'Antal meddelanden: 0';
       
        txtArea.onkeydown = function(e){
            if(e.keyCode === 13 && !e.shiftKey){
                createNewMessage();
                addMessageToList();
                txtArea.blur();
            }
        };
        
        submitButton.addEventListener("click", function(e){
            createNewMessage();
            
             
        });
        
        function createNewMessage(){
            var chatMessage = document.querySelector("textarea");
            var newMessage = new Message(chatMessage.value, new Date());
            MyMessages.messages.push(newMessage);
            numberOfMessages.innerHTML = 'Antal meddelanden: ' + MyMessages.messages.length;
            addMessageToList();
            //clears textarea after submitting message
            txtArea.value ="";
        }
        
        function addMessageToList(){
            var listOfMessages = document.getElementById("listofmessages");
            
            //clear list of messages
            listOfMessages.innerHTML = "";
           
           //loop through array to present each message in array
            MyMessages.messages.forEach(function(entry) {
                
                
                var listItem = document.createElement("li");
                listOfMessages.appendChild(listItem); 
                
                var deleteBtn = document.createElement("button");
                deleteBtn.id = "deletebutton";
                listItem.appendChild(deleteBtn); 
                
                var chatText = document.createElement("p");
                chatText.id = "chattext";
                chatText.innerHTML = entry.getHTMLText();
                listItem.appendChild(chatText);
                
                var timeStamp = document.createElement("p");
                timeStamp.id = "timestamp";
                timeStamp.innerHTML = entry.getDateText();
                listItem.appendChild(timeStamp);
            });
        }
    }
};
window.onload = MyMessages.run;