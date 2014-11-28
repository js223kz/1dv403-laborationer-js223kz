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
            
            showNumberOfMessages();
            
            var listOfMessages = document.getElementById("listofmessages");
            listOfMessages.innerHTML = "";
            
            MyMessages.messages.forEach(function(item){
                var index = MyMessages.messages.indexOf(item);
                
                var listItem = document.createElement("li");
                listOfMessages.appendChild(listItem);
                
                var chatDiv = document.createElement("div"); 
                chatDiv.id = "chatdiv";
                listItem.appendChild(chatDiv);
               
                var chatText = document.createElement("p");
                chatText.id = "chattext";
                chatText.innerHTML = item.getHTMLText();
                chatDiv.appendChild(chatText);
                
                var buttonDiv = document.createElement("div"); 
                buttonDiv.id = "buttondiv";
                listItem.appendChild(buttonDiv);
                
                var deleteBtn = document.createElement("button");  
                deleteBtn.id = "deletebutton";
                buttonDiv.appendChild(deleteBtn);
                 
                deleteBtn.addEventListener("click", function(){
                    removeMessagesFromList(index);
                });  
                var timeStampBtn = document.createElement("button");
                timeStampBtn.id = "timestampbutton";
                buttonDiv.appendChild(timeStampBtn);
        
                timeStampBtn.addEventListener("click", function(e){
                    showTimeStamp(item);
                });
               
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
                    renderList();
            	    return true;
               }else{
            	    return false;
               }
         
        }
        function showTimeStamp(item){
            alert("Detta meddelande skapades: " + item.getDateText() + " klockan " + item.getTimeText());
        }
    }
};
window.onload = MyMessages.run;