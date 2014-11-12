"use strict";

var makePerson = function(persArr){
    
    var result = {};
    var namesArray = [];
    var agesArray = [];
    var nameString;
    var totalAge;
    var averageAge;
    var minAge;
    var maxAge;
    
    function getArrayElements(elem, index, arr) {
        namesArray[index] = elem.name;
        agesArray[index] = elem.age;
        
        if(typeof elem.name !== "string"){
            throw new Error("Namnet saknas eller innehåller ogiltiga tecken.");
        }
        if(typeof elem.age !== "number"){
            throw new Error("Åldern saknas eller innehåller ogiltiga tecken.");
        }
        console.log(typeof elem.age);
                
    }
    persArr.forEach(getArrayElements);
    
    //sort names with regard to local swedish letters
    namesArray.sort(function(a, b) {
        return a.localeCompare(b);
    });
        
    nameString= namesArray.join(", ");
    
    agesArray.sort();
    
    minAge = agesArray[0];
    maxAge = agesArray[agesArray.length -1];

    //calculate total sum of ages
    totalAge = agesArray.reduce(function(sum, elem, index, arr){
        return sum + elem;
    });
    
    //calculate average of ages
    averageAge = Math.round(totalAge / agesArray.length);
    
    //setting properties to result object
    result.minAge = minAge;
    result.maxAge = maxAge;
    result.averageAge = averageAge;
    result.names = nameString;
    
    console.log(result);
    
    return result;
}

