"use strict";

var JOSZEP = JOSZEP || {};

JOSZEP.init = function(){
    var id = 1;
    var url = "http://vhost3.lnu.se:20080/question/";
      
    getJson(url);
    
    function getJson(url){
        var response = null;
        var AJAX_req = new XMLHttpRequest();
            AJAX_req.open("GET", url + id, true);
        
        AJAX_req.onreadystatechange = function(){
            
            if(AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                getQuestion(response);
            }
        };
        AJAX_req.send(null); 
    }
    function getQuestion(response){
        var question = document.querySelector(".question");
            question.innerHTML = response.question;
        var input = document.getElementById("textfield");
        var answerbutton = document.getElementById("answerbutton");
                
            answerbutton.addEventListener("click", function(e){
                e.preventDefault();
                sendAnswer(input.value, response);
            });
    }
    function sendAnswer(inputvalue, response){
        
        var answerResponse = null;
        var AJAX_post = new XMLHttpRequest();
        AJAX_post.onreadystatechange = function() {
            
            if(AJAX_post.readyState == 4 && AJAX_post.status == 200) {
              answerResponse = JSON.parse(AJAX_post.responseText);
              console.log(answerResponse.message);
            }
        };
        AJAX_post.open("POST", response.nextURL, true);
        AJAX_post.setRequestHeader('Content-Type', 'application/json');
        var answer = JSON.stringify({"answer":inputvalue});
        AJAX_post.send(answer);
    }
};
window.onload = JOSZEP.init;