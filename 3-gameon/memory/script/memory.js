"use strict";


    var Memory = {
        memoryArray : [],
        
        init : function(){
        var newBoard = new RandomGenerator.getPictureArray(3, 4);
        
        Memory.memoryArray.push(newBoard);
        console.log(newBoard); 
        console.log(Memory.memoryArray);
        }
    }; 
window.onload = Memory.init;
   

