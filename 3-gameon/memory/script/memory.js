"use strict";


var Memory = {
    
    init : function(){
       
    var memoryOne = new MemoryBoard.start(3, 4, "memoryboard1");
    var memoryTwo = new MemoryBoard.start(4, 2, "memoryboard2");
    }
};
window.onload = Memory.init;