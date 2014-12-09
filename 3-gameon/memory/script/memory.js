"use strict";


var Memory = {
    memoryArray : [],
    valueArray : [],
    init : function(){
        var newBoard = new RandomGenerator.getPictureArray(3, 4);
        
        newBoard.forEach(function(item){
            Memory.memoryArray.push(item);
            
        });
        
        Memory.memoryArray.forEach(function(item){
            createCell(item);
        });
        var rows;
        var columns;
        var boardRow = null;
        var boardColumn = null;
        var memoryBoard = document.getElementById("memoryboard");
        
        for(rows = 0; rows < RandomGenerator.rows; rows+=1){
            boardRow = memoryBoard.insertRow(rows);
            
            for(columns = 0; columns < RandomGenerator.cols; columns+=1){
                
             }
        }
        memoryBoard.appendChild(boardRow);
        
        function createCell(item) {
            var boardLink = document.createElement("a");
                boardLink.href = "#";
                boardLink.id = item;
            var image = document.createElement("img");
                boardLink.appendChild(image);
            
            console.log(boardLink.id);

            boardLink.addEventListener("click", function(e){
            });
            
        }

    }
};
window.onload = Memory.init;
   

