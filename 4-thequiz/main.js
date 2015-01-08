"use strict";

var JOSZEP = JOSZEP || {};

JOSZEP.init = function(){
    var AJAX_req = new XMLHttpRequest();
        AJAX_req.open( "GET","http://vhost3.lnu.se:20080/question/1", true);
    var response = null;    
        AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState == 4 && AJAX_req.status == 200){
                response = JSON.parse(AJAX_req.responseText);
                console.log(response);
                getQuestion(response);
            }
        };
        AJAX_req.send();
        
        
    function getQuestion(response){
      
        var question = document.querySelector(".question");
        question.innerHTML = response.question;
        var input = document.getElementById("textfield");
        var answerbutton = document.getElementById("answerbutton");
        
        answerbutton.addEventListener("click", function(e){
            console.log(input.value);
        });
    }
};

window.onload = JOSZEP.init;