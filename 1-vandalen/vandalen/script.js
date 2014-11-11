"use strict";

var makePerson = function(persArr){

    var arrayData = [];
    arrayData.names = arrayData.push(persArr[0].name, persArr[1].name, persArr[2].name);
    arrayData.sort(arrayData.names);
    console.log(arrayData);
    
    
    
    //var max_of_array = Math.max.apply(Math, array);
    
    return arrayData;

}

