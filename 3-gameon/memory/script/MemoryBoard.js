"use strict";

var MemoryBoard = {
    tileValueArray : [],
    tileIdArray : [],
    memoryArray : [],
    
    start: function(rows, cols, memoryBoardID){
    
        MemoryBoard.memoryArray = new RandomGenerator.getPictureArray(rows, cols);
        console.log(MemoryBoard.memoryArray);
        var section = document.getElementById(memoryBoardID);
        var memoryBoard = document.createElement("table");
        var memoryTitle = document.createElement("h1");
            memoryTitle.innerHTML = "Memory";
            section.appendChild(memoryTitle);
            section.appendChild(memoryBoard);
        var tilesFlipped = 0;
        var clicks = 0;
        
        renderBoard();
        
        function renderBoard(){
            
            var i, j;
            var tileRows = null; 
            var columns = document.createElement("td");
            for(i = 0; i < rows; i++){
                tileRows = document.createElement("tr");
                memoryBoard.appendChild(tileRows);
                
                for(j=0; j< cols; j++){
                    createTiles(i, j);
                    tileRows.appendChild(columns);
                }
            }    
        }
        
        function createTiles(rows, cols){
            var boardLink = document.createElement("a");
                boardLink.href = "#";
            
            var image = document.createElement("img");
                image.classList.add("id" + MemoryBoard.memoryArray[rows*cols + cols]);
                image.imageValue =  MemoryBoard.memoryArray[rows*cols + cols];
                image.id = rows*cols + cols;
                image.src = "memory/pics/0.png";
                        
                boardLink.addEventListener("click", function(e){
                    flipImage(image);
                    return false;
                });      
                        
                boardLink.appendChild(image);
                memoryBoard.appendChild(boardLink);   
        }
        
        function flipImage(image){
            var imageSrc = "memory/pics/" + image.imageValue + ".png";
                image.src = imageSrc;
            console.log(MemoryBoard.memoryArray);
            if(MemoryBoard.tileValueArray.length < 2){
                            
                if(MemoryBoard.tileValueArray.length === 0){
                    MemoryBoard.tileValueArray.push(image.imageValue);
                    MemoryBoard.tileValueArray.push(image.id);
                   console.log(MemoryBoard.tileValueArray.length);
                    ++clicks;
                }else if(MemoryBoard.tileValueArray.length === 1){
                               
                    if(MemoryBoard.tileIdArray[0] !== image.id){
                        ++clicks;
                        MemoryBoard.tileValueArray.push(image.imageValue);
                        MemoryBoard.tileValueArray.push(image.id);
                    }
            
                    if(MemoryBoard.tileValueArray[0] === MemoryBoard.tileValueArray[1]){
                        tilesFlipped +=2;
                        MemoryBoard.tileValueArray = [];
                        MemoryBoard.tileIdArray = [];
                    }
                    if(tilesFlipped === MemoryBoard.memoryArray.length){
                        displayScoreText(clicks/2);
                            
                                
                    }else if(MemoryBoard.tileValueArray.length === 2){
                        setTimeout(flipBack, 1000); 
                    }else{
                                
                    }
                }   
            } 
        }
        
        function flipBack(){
            var tileOne = document.getElementById(MemoryBoard.tileIdArray[0]);
            var tileTwo = document.getElementById(MemoryBoard.tileIdArray[1]);
                            
                tileOne.src = "memory/pics/0.png";
                tileTwo.src = "memory/pics/0.png";
                            
            MemoryBoard.tileValueArray = [];
            MemoryBoard.tileIdArray = [];
        }
        function displayScoreText(numberOfRounds){
            var text = document.createElement("p");
                text.innerHTML = "Du klarade spelet på " + numberOfRounds + " rundor";
            
            section.appendChild(text);
        }
    }    
};

 