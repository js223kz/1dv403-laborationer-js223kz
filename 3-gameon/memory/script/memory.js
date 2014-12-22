"use strict";


var memoryApp = {
    
    init : function(){
       
    var memoryOne = new Board(3, 4, "memoryboard1");
    var memoryTwo = new Board(4, 2, "memoryboard2");
    memoryOne.start();
    memoryTwo.start();
    
    }
};
window.onload = memoryApp.init;