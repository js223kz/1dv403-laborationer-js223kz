"use strict";

var MyMessages = {
    messages: [], 

   run : function(){
        var submitButton = document.querySelector("button");
            submitButton.addEventListener("click", function(e){
                createNewMessage();
            });
        
        var numberOfMessages = document.getElementById("numberofmessages");
            numberOfMessages.innerHTML = 'Antal meddelanden: 0';
        
        var txtArea = document.querySelector("textarea");
            
            txtArea.onkeydown = function(e){
                if(e.keyCode === 13 && !e.shiftKey){
                    createNewMessage();
                    txtArea.blur();
                }
            };
            
        
        
        function createNewMessage(){
            var chatMessage = document.querySelector("textarea");
            var newMessage = new Message(chatMessage.value, new Date());
            MyMessages.messages.push(newMessage);
            
            renderMessage();
            
            //clears textarea after submitting message
            txtArea.value ="";
        }
        
        function renderMessage(){
            
            showNumberOfMessages();
            var listOfMessages = document.getElementById("listofmessages");
            listOfMessages.innerHTML = "";
            
            MyMessages.messages.forEach(function(item){
            var index = MyMessages.messages.indexOf(item);
            
            var listItem = document.createElement("li");
            listOfMessages.appendChild(listItem);
                
            var chatDiv = document.createElement("div"); 
                chatDiv.id = "chatdiv";
                chatDiv.innerHTML = item.getHTMLText();
                listItem.appendChild(chatDiv);
          
            var buttonDiv = document.createElement("div"); 
                buttonDiv.id = "buttondiv";
                listItem.appendChild(buttonDiv);
                
            var timeStampBtn = document.createElement("button");
                timeStampBtn.id = "timestampbutton";
                timeStampBtn.addEventListener("click", function(e){
                    showTimeStamp(item);
                });
            buttonDiv.appendChild(timeStampBtn);
                
                
            var deleteBtn = document.createElement("button");  
                deleteBtn.id = "deletebutton";
                deleteBtn.addEventListener("click", function(){
                    removeMessagesFromList(index);
                });  
            buttonDiv.appendChild(deleteBtn);
               
            var timeStamp = document.createElement("p");
                timeStamp.id = "timestamp";
                timeStamp.innerHTML = item.getTimeText();
                listItem.appendChild(timeStamp);
                
            }); 
        }
        
        function showNumberOfMessages(){
            numberOfMessages.innerHTML = 'Antal meddelanden: ' + MyMessages.messages.length;
        }
        
        function removeMessagesFromList(index){
            var dialogMessage = confirm("Sure you want to delete chatmessage?");
               
                if(dialogMessage === true ){
                    MyMessages.messages.splice(index, 1);
                    renderMessage();
            	    return true;
                }else{
            	    return false;
               }
         
        }
        
        function showTimeStamp(index){
            alert("Detta meddelande skapades: " + index.getDateText());
        }
    }
};
window.onload = MyMessages.run;