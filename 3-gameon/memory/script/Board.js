"use strict";


function Board(rows, cols, id){
    
    this.rows = rows;
    this.cols = cols;
    this.id = id;
    this.memoryArray = RandomGenerator.getPictureArray(this.rows, this.cols);
    
    this.start = function(){
        var that = this;
        var section = document.getElementById(that.id);
        var memoryBoard = document.createElement("table");
        var memoryTitle = document.createElement("h1");
        memoryTitle.innerHTML = "Memory";
        section.appendChild(memoryTitle);
        section.appendChild(memoryBoard);
        
        var tilesValueArray = [];
        var tilesValueId = [];
        
        var clicks = 0;
        var tilesFlipped = 0;
        
        createBoard();
        
        function createBoard(){
            var i, j;
            var tileRows = null; 
            var columns = document.createElement("td");
            for(i = 0; i < that.rows; i++){
                tileRows = document.createElement("tr");
                memoryBoard.appendChild(tileRows);
            
                for(j=0; j < that.cols; j++){
                    createTiles(i, j);
                    tileRows.appendChild(columns);
                }
            }    
        }
        function createTiles(rows, cols){
            var position = rows*that.cols + cols;
            var boardLink = document.createElement("a");
                boardLink.href = "#";
                
            var image = document.createElement("img");
            
                image.src = "memory/pics/0.png";
                image.id = that.id + position;
                image.imageValue = that.memoryArray[position];
                boardLink.addEventListener("click", function(e){
                    flipTile(image);
                });      
                                
                boardLink.appendChild(image);
                memoryBoard.appendChild(boardLink);  
        }
        
        function flipTile(image){
            var imageSrc = "memory/pics/" + image.imageValue + ".png";
            image.src = imageSrc;
            
            if(tilesValueArray.length < 2){
        		
        		if(tilesValueArray.length === 0){
        			tilesValueArray.push(image.imageValue);
                    tilesValueId.push(image.id);
                    console.log("noll"); 
                    ++clicks;
        		}else if(tilesValueArray.length === 1){
        		    
        		    if(tilesValueId[0] !== image.id){
                        console.log("inte samma");
                        ++clicks;
                        tilesValueArray.push(image.imageValue);
                        tilesValueId.push(image.id);
                        console.log(tilesValueArray.length);
                    }
        		
        			if(tilesValueArray[0] === tilesValueArray[1]){
        			    console.log("lika");
                        tilesFlipped +=2;
                        tilesValueArray = [];
                        tilesValueId = [];

        				if(tilesFlipped === that.memoryArray.length){
        					 console.log("spelet färdigt");
                            displayScoreText(clicks/2);
        				}
			        } else {
				    setTimeout(flipBack, 1000);   
				    }
			    }
		    }
	    }
        
        function flipBack(){
            var tileOne = document.getElementById(tilesValueId[0]);
            var tileTwo = document.getElementById(tilesValueId[1]);
            tileOne.src = "memory/pics/0.png";
            tileTwo.src = "memory/pics/0.png";
                            
            tilesValueArray = [];
            tilesValueId = []; 
        }
        
        function displayScoreText(numberOfRounds){
            var text = document.createElement("p");
            text.innerHTML = "Du klarade spelet på " + numberOfRounds + " rundor";
            
            section.appendChild(text);
        }
    };
}
