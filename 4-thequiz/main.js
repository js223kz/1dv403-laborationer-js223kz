"use strict";

var JOSZEP = JOSZEP || {};

JOSZEP.init = function(){
    var url = "http://vhost3.lnu.se:20080/question/1";
    var numberOfGuesses = 0;
    
    getJson(url);
    
    //connect to server and get json result
    function getJson(url){
        var response;
        var AJAX_req = new XMLHttpRequest();
            AJAX_req.open("GET", url, true);
        
        AJAX_req.onreadystatechange = function(){
            
            if(AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                getQuestion(response);
            }
        };
        AJAX_req.send(null); 
    }
    
    //present the question
    function getQuestion(response){
        var question = document.querySelector(".question");
        question.innerHTML = response.question;
        
        var input = document.getElementById("textfield");
        var answerbutton = document.getElementById("answerbutton");
        
        answerbutton.addEventListener("click", function(e){
            numberOfGuesses++;
            console.log(numberOfGuesses);
            
            e.preventDefault();
            sendAnswer(input.value, response.nextURL);
        });
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
                
                if(answerResponse.nextURL !== undefined){
                    console.log(answerResponse.message);
                    getJson(answerResponse.nextURL);
                }else{
                   console.log(answerResponse.message); 
                }
            }
        };
        
        
        var answer = JSON.stringify({"answer":inputvalue});
        AJAX_post.send(answer);
    }
};
window.onload = JOSZEP.init;