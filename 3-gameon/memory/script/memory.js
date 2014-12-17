"use strict";


var Memory = {
    
    init : function(){
       
    var memoryOne = new MemoryBoard(3, 4, "memoryboard1");
    var memoryTwo = new MemoryBoard(4, 2, "memoryboard2");
        
    memoryOne.start();    
    memoryTwo.start();
       
    }
};
window.onload = Memory.init;