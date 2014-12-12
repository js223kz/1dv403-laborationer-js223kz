"use strict";


var Memory = {
    memoryArray : [],
    
    init : function(){
        var tileValueArray = [];
        var tileIdArray = [];
        var tilesFlipped = 0;
        var clicks = 0;
        Memory.memoryArray = new RandomGenerator.getPictureArray(4, 4);
        
        var section = document.getElementById("memoryboard1");
        var memoryBoard = document.createElement("table");
        section.appendChild(memoryBoard);
        renderBoard();
        
        //create specific tiles on Memeryboard
        function createTiles(rows, cols){
            var boardLink = document.createElement("a");
                boardLink.href = "#";
            
            var image = document.createElement("img");
                image.classList.add("id" + Memory.memoryArray[rows*4 + cols]);
                image.imageValue =  Memory.memoryArray[rows*4 + cols];
                image.id = rows*4 + cols;
                image.src = "memory/pics/0.png";
            
                boardLink.addEventListener("click", function(e){
                    toggleImage(image);
                });      
            
            boardLink.appendChild(image);
            memoryBoard.appendChild(boardLink);   
        }
        
        //render alla rows and columns on Memoryboard
        function renderBoard() {

            var i, j;
            var rows = null; 
            var columns = document.createElement("td");
            
            for(i = 0; i < RandomGenerator.rows; i++){
                rows = document.createElement("tr");
                memoryBoard.appendChild(rows);
                
                for(j=0; j< RandomGenerator.cols; j++){
                    createTiles(i, j);
                    rows.appendChild(columns);
                }
            }
        }
        
        //change image on click
        function toggleImage(image){
            ++clicks;
            var numberOfRounds = clicks/2;
            
            var imageSrc = "memory/pics/" + image.imageValue + ".png";
            image.src = imageSrc;
            
            if(tileValueArray.length < 2){
                
                if(tileValueArray.length === 0){
                    tileValueArray.push(image.imageValue);
                    tileIdArray.push(image.id);
                }else if(tileValueArray.length === 1){
                    tileValueArray.push(image.imageValue);
                    tileIdArray.push(image.id);

                    if(tileValueArray[0] === tileValueArray[1]){
                        tilesFlipped +=2;
                        tileValueArray = [];
                        tileIdArray = [];
                        
                    }
                    if(tilesFlipped === Memory.memoryArray.length){
                        displayScoreText(numberOfRounds);
                }else{
                    setTimeout(flipBack, 1000); 
                }
                }   
            } 
        }
        function flipBack(){
            var tileOne = document.getElementById(tileIdArray[0]);
            var tileTwo = document.getElementById(tileIdArray[1]);
            tileOne.src = "memory/pics/0.png";
            tileTwo.src = "memory/pics/0.png";
            tileValueArray = [];
            tileIdArray = [];
        }
        function displayScoreText(numberOfRounds){
            
            var text = document.createElement("p");
                text.innerHTML = "Du klarade spelet på " + numberOfRounds + " rundor";
                section.appendChild(text);
        }

    }
};
window.onload = Memory.init;