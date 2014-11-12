"use strict";

var makePerson = function(persArr){
    var i = 0;
    var namesArray = [];
    var agesArray = [];
    var average = 0;
    var hello = 'å'.localeCompare('a');
    var list = "å ä ö".split(" ");

console.log(list);
    console.log(hello);
    for(i=0; i<persArr.length;i++){
        namesArray[i] = persArr[i].name;
        agesArray[i] = persArr[i].age;
        average += persArr[i].age;
    }
    //namesArray.sort();
    namesArray.sort(function(a, b) {
  return a.localeCompare(b);
});
   var newString = namesArray.join(", ");
   
   agesArray.sort();
   var minAge = agesArray[0];
   var maxAge = agesArray[agesArray.length -1];
   average = Math.round(average / agesArray.length);
    var result = {};
    result.minAge = minAge;
    result.maxAge = maxAge;
    result.averageAge = average;
    result.names = newString;
    console.log(result);
    return result;
}

