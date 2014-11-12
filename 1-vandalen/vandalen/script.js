"use strict";

var makePerson = function(persArr){
    var namesArray = [];
    var agesArray = [];
    var nameString;
    var totalAge;
    var averageAge;
    var minAge;
    var maxAge;
    
    function getArrayElements(elem, index, arr) {
        if(typeof elem.name != "string"){
            throw new Error("Namnet saknas eller innehåller ogiltiga tecken.");
        }
        if(typeof elem.age != "number"){
            throw new Error("Åldern saknas eller innehåller ogiltiga tecken.");
        }
        
        namesArray[index] = elem.name;
        agesArray[index]= elem.age;
        
        console.log(typeof elem.age);
                
    }
    persArr.forEach(getArrayElements);
    
    namesArray.sort(function(a, b) {
        return a.localeCompare(b);
    });
        
    nameString= namesArray.join(", ");
    
    agesArray.sort();
    
    minAge = agesArray[0];
    maxAge = agesArray[agesArray.length -1];

    totalAge = agesArray.reduce(function(sum, elem, index, arr){
        return sum + elem;
    });
    
    averageAge = Math.round(totalAge / agesArray.length);

    var result = {};
    result.minAge = minAge;
    result.maxAge = maxAge;
    result.averageAge = averageAge;
    result.names = nameString;
    
    console.log(result);
    
    return result;
}

