"use strict";
var MyMessages = {
    messages: [], 
    index: 0,

   run : function(){
        var submitButton = document.querySelector("button");
        var txtArea = document.querySelector("textarea");
        var numberOfMessages = document.getElementById("numberofmessages");
        numberOfMessages.innerHTML = 'Antal meddelanden: 0';
        var newMessage;
       
        
        
        
        
        txtArea.onkeydown = function(e){
            if(e.keyCode === 13 && !e.shiftKey){
                createNewMessage();
                txtArea.blur();
            }
        };
        
        submitButton.addEventListener("click", function(e){
            createNewMessage();
        });
        
         
        
        
        function createNewMessage(){
            var chatMessage = document.querySelector("textarea");
            newMessage = new Message(chatMessage.value, new Date());
            MyMessages.messages.push(newMessage);
            
            
            renderList();
            
            //clears textarea after submitting message
            txtArea.value ="";
        }
        
        function renderList(){
            var listOfMessages = document.getElementById("listofmessages");
            listOfMessages.innerHTML = "";
            showNumberOfMessages();
            
            MyMessages.messages.forEach(function(item){
                var index = MyMessages.messages.indexOf(item);
                
                var listItem = document.createElement("li");
                listOfMessages.appendChild(listItem); 
                
                var deleteBtn = document.createElement("button");  
                deleteBtn.id = "deletebutton";
                listItem.appendChild(deleteBtn);
                 
                deleteBtn.addEventListener("click", function(e){
                    removeMessagesFromList(index);
                });  
                
                var timeStampBtn = document.createElement("button");
                timeStampBtn.id = "timestampbutton";
                listItem.appendChild(timeStampBtn);
        
                var chatText = document.createElement("p");
                chatText.id = "chattext";
                chatText.innerHTML = item.getHTMLText();
                listItem.appendChild(chatText);
                    
                var timeStamp = document.createElement("p");
                timeStamp.id = "timestamp";
                timeStamp.innerHTML = item.getDateText();
                listItem.appendChild(timeStamp);
                
            });  
        }
        function showNumberOfMessages(){
            numberOfMessages.innerHTML = 'Antal meddelanden: ' + MyMessages.messages.length;
        }
        function removeMessagesFromList(index){
            MyMessages.messages.splice(index, 1);
            renderList();
        }
    }
};
window.onload = MyMessages.run;