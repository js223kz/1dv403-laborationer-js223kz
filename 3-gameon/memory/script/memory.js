"use strict";


    var Memory = {
        memoryArray : [],
        
        init : function(){
        var newBoard = new RandomGenerator.getPictureArray(3, 4);
        console.log(newBoard); 
        }
    }; 
window.onload = Memory.init;
   

