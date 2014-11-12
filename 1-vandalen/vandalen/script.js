"use strict";

var makePerson = function(persArr){
    var namesArray = [];
    var agesArray = [];
    var nameString;
    var totalAge;
    
    function logArrayElements(elem, index, arr) {
            namesArray[index] = elem.name;
            agesArray[index] = elem.age;
    }

    persArr.forEach(logArrayElements);
            
    namesArray.sort(function(a, b) {
        return a.localeCompare(b);
    });
        
    nameString= namesArray.join(", ");
    
    agesArray.reduce(function(sum, elem, index, arr){
    totalAge = sum + elem;
    });

    
    /*var i = 0;
    
    var agesArray = [];
    var average = 0;

    for(i=0; i<persArr.length;i++){
        namesArray[i] = persArr[i].name;
        agesArray[i] = persArr[i].age;
        average += persArr[i].age;
    }

   
   agesArray.sort();
   var minAge = agesArray[0];
   var maxAge = agesArray[agesArray.length -1];
   average = Math.round(average / agesArray.length);*/
    var result = {};
    result.names = nameString;
    
    console.log(nameString);
    /*result.minAge = minAge;
    result.maxAge = maxAge;
    result.averageAge = average;
    
    console.log(result);*/
    return result;
}

