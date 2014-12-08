"use strict";

var MyMessages = {
    messages: [], 

   run : function(){
        
        //button that submits chatmessage
        var submitButton = document.querySelector("button");
            submitButton.addEventListener("click", function(e){
                createNewMessage();
            });
        
        //Holds and prints number of written chatmessages
        var numberOfMessages = document.getElementById("numberofmessages");
            numberOfMessages.innerHTML = 'Antal meddelanden: 0';
        
        //textarea to write chatmessage
        var txtArea = document.querySelector("textarea");
            
            //if enter is pressed submit message
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
        
        //print all messages in a list
        function renderMessage(){
            
            //Update number of chatmessages written
            showNumberOfMessages();
            
            //get the unordered list and empty it
            var listOfMessages = document.getElementById("listofmessages");
            listOfMessages.innerHTML = "";
            
            //loop through the array and print out all messages as li elements
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
        
        //Keep track of number of messages written
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
            alert("Detta meddelande skapades: " + index.getDateText() + " klockan " + index.getTimeText());
        }
    }
};
window.onload = MyMessages.run;