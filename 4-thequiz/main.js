"use strict";

var JOSZEP = JOSZEP || {};

JOSZEP.init = function(){
    var url = "http://vhost3.lnu.se:20080/question/1";
    var numberOfGuesses = 0;
    var responseQuestion = null;
    var responseURL = null;
    
    var input = document.getElementById("textfield");
    var messageText = document.querySelector(".answertext");
   
    var answerbutton = document.getElementById("answerbutton");
        answerbutton.addEventListener("click", function(e){
            messageText.innerHTML = "";
            numberOfGuesses++;
            e.preventDefault();
            sendAnswer(input.value, responseURL);
            input.value = "";
        });
    
    getJson(url);
    
    //connect to server and get json result
    function getJson(url){
        var response;
        var AJAX_req = new XMLHttpRequest();
            AJAX_req.open("GET", url, true);
        
        AJAX_req.onreadystatechange = function(){
            if(AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                responseQuestion = response.question;
                responseURL = response.nextURL;
                updateQuestion(responseQuestion);
            }
        };
        AJAX_req.send(null); 
    }
    
    //update question
    function updateQuestion(responseQuestion){
    var question = document.querySelector(".question");
       question.innerHTML = responseQuestion;
    }
   
    //send user answer to server and get result
    function sendAnswer(inputvalue, responseURL){
        var answerResponse;
        var AJAX_post = new XMLHttpRequest();
        AJAX_post.open("POST", responseURL, true);
        AJAX_post.setRequestHeader('Content-Type', 'application/json');
        
        AJAX_post.onreadystatechange = function() {
            
            if(AJAX_post.readyState == 4) {
                answerResponse = JSON.parse(AJAX_post.responseText);
                
                if(AJAX_post.status == 200){
                    if(answerResponse.nextURL === undefined){
                        messageText.innerHTML = "Frågorna är slut. Du klarade det på " + numberOfGuesses + " försök";
                        messageText.style.color = "green";
                    }
                    getJson(answerResponse.nextURL);
                }else{
                   messageText.innerHTML = "Svaret är fel.Försök igen!";
                   messageText.style.color = "red";
                }
            }
        };
        
        
        var answer = JSON.stringify({"answer":inputvalue});
        AJAX_post.send(answer);
    }
};
window.onload = JOSZEP.init;