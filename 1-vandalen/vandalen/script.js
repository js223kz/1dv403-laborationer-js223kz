"use strict";

var makePerson = function(persArr){
    var totalAge;
    var nameString;
    var averageAge;
    
    var names = persArr.map(function(names){
        if(isNaN(names.name)){
            return names.name;
        }
        
    });
    sortNames(names);
    
    var ages = persArr.map(function(ages){
        if(!isNaN(ages.age)){
            return ages.age;
        }
    });
    sortAges(ages);
    
    nameString = names.join(", ");
    
    totalAge = ages.reduce(function(sum, elem, index, arr){
            return sum + elem;
    });
    
    averageAge = Math.round(totalAge / ages.length);
    
    function sortNames(arr){
        arr.sort(function(a, b){
            return a.localeCompare(b);
        });
    }
    function sortAges(arr){
        arr.sort();
        return arr;
    }
    var result = {minAge: ages[0], maxAge: ages[ages.length -1], averageAge: averageAge, names: nameString};
   
    //console.log(result);
    return result;
};

