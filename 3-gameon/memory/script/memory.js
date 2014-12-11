"use strict";


var Memory = {
    memoryArray : [],
    tileArray : [],
    init : function(){
        
        Memory.memoryArray = new RandomGenerator.getPictureArray(3, 4);

        var memoryBoard = document.getElementById("memoryboard");
        console.log(Memory.memoryArray);
        renderBoard();
        
        function createTiles(i, j){
            
            var boardLink = null;
            var image = null;
            boardLink = document.createElement("a");
                boardLink.href = "#";
                boardLink.id = Memory.memoryArray[i*4 + j];
                boardLink.addEventListener("click", function(){
                    console.log(boardLink.id);
                });      
            image = document.createElement("img");
            boardLink.appendChild(image);
            memoryBoard.appendChild(boardLink);   
        }
        
        function renderBoard() {
            var i, j;
            var rows = null;
            var columns = null;
            columns = document.createElement("td");
            
            
            for(i = 0; i < RandomGenerator.rows; i++){
                rows = document.createElement("tr");
                memoryBoard.appendChild(rows);
                
                for(j=0; j< RandomGenerator.cols; j++){
                    createTiles(i, j);
                    rows.appendChild(columns);
                }
                
            }
           
        }
    }
};
window.onload = Memory.init;