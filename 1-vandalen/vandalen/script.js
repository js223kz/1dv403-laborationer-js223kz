"use strict";

var makePerson = function(persArr){
    var namesArray = [];
    var agesArray = [];
    var nameString;
    var totalAge;
    var averageAge;
    var minAge;
    var maxAge;
    
    function logArrayElements(elem, index, arr) {
            namesArray[index] = elem.name;
            agesArray[index]= +elem.age;
    }
   

    persArr.forEach(logArrayElements);
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

