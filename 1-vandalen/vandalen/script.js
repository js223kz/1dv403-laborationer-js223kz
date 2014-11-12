"use strict";

var makePerson = function(persArr){
    var i = 0;
    var namesArray = [];
    var agesArray = [];
   
    for(i=0; i<persArr.length;i++){
        namesArray[i] = persArr[i].name;
        agesArray[i] = persArr[i].age;
    }
   namesArray.sort();
   var newString = namesArray.join(", ");
   
   agesArray.sort();
   var minAge = agesArray[0];
   var maxAge = agesArray[agesArray.length -1];
    var result = {};
    result.minAge = minAge;
    result.maxAge = maxAge;
    result.names = newString;
    console.log(result);
    return result;
}

