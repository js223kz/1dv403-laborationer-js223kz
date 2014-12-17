function MemoryBoard(rows, cols, memoryBoardID){
    
    this.rows = rows;
    this.cols = cols;
    this.memoryBoardID = memoryBoardID;

    var memoryArray = new RandomGenerator.getPictureArray(this.rows, this.cols);
    
    var tilesFlipped = 0;
    var clicks = 0;
    var tileValueArray = [];
    var tileIdArray = [];
    
    var section = document.getElementById(this.memoryBoardID);
    var memoryBoard = document.createElement("table");
    var memoryTitle = document.createElement("h1");
        memoryTitle.innerHTML = "Memory";
        section.appendChild(memoryTitle);
        section.appendChild(memoryBoard);
        
    
    this.start = function(){
       renderBoard();
    }; 
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
            //image.classList.add("id" + memoryArray[rows*4 + cols]);
            image.imageValue =  memoryArray[rows*4 + cols];
            image.id = "id"+ rows*4 + cols;
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
                    
        if(tileValueArray.length < 2){
                        
            if(tileValueArray.length === 0){
                tileValueArray.push(image.imageValue);
                tileIdArray.push(image.id);
                ++clicks;
            }else if(tileValueArray.length === 1){
                           
                if(tileIdArray[0] !== this.image.id){
                    ++clicks;
                    tileValueArray.push(image.imageValue);
                    tileIdArray.push(image.id);
                }
        
                if(tileValueArray[0] === tileValueArray[1]){
                    tilesFlipped +=2;
                    tileValueArray = [];
                    tileIdArray = [];
                }
                if(tilesFlipped === memoryArray.length){
                    displayScoreText(clicks/2);
                        
                            
                }else if(tileValueArray.length === 2){
                    setTimeout(flipBack, 1000); 
                }else{
                            
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
        
        this.section.appendChild(text);
    }
        
        
        /*this.getRows = function(){
            return rows;
        };
        this.setRows = function(_rows){
            rows = _rows;
        };
        this.getCols = function(){
            return cols;
        };
        this.setCols = function(_cols){
            cols = _cols;
        };
        this.getID = function(){
            return memoryBoardID;
        };
        this.setID = function(_memoryBoardID){
            memoryBoardID = _memoryBoardID;
        };
        
        
        this.setRows(rows);
        this.setCols(cols);
        this.setID(memoryBoardID);*/
} 
   
        
        
        
        
        
        
        
        
        



        
    