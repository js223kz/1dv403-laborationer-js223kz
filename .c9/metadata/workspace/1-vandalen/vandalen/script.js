{"changed":true,"filter":false,"title":"script.js","tooltip":"/1-vandalen/vandalen/script.js","value":"\"use strict\";\n\nvar makePerson = function(persArr){\n    \n    function logArrayElements(elem, index, arr) {\n            console.log(elem.name);\n    }\n\n// Note ellision, there is no member at 2 so it isn't visited\n        persArr.forEach(logArrayElements);\n            \n    \n    \n    /*var i = 0;\n    var namesArray = [];\n    var agesArray = [];\n    var average = 0;\n\n    for(i=0; i<persArr.length;i++){\n        namesArray[i] = persArr[i].name;\n        agesArray[i] = persArr[i].age;\n        average += persArr[i].age;\n    }\n    namesArray.sort(function(a, b) {\n        return a.localeCompare(b);\n});\n   var newString = namesArray.join(\", \");\n   \n   agesArray.sort();\n   var minAge = agesArray[0];\n   var maxAge = agesArray[agesArray.length -1];\n   average = Math.round(average / agesArray.length);*/\n    var result = {};\n    /*result.minAge = minAge;\n    result.maxAge = maxAge;\n    result.averageAge = average;\n    result.names = newString;\n    console.log(result);*/\n    return result;\n}\n\n","undoManager":{"mark":96,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":31},"end":{"row":19,"column":32}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":32},"end":{"row":19,"column":33}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":4}},"text":"list"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":1},"end":{"row":9,"column":2}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":3}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"nam"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":10}},"text":"namesArray"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":9,"column":0},"end":{"row":11,"column":0}},"nl":"\n","lines":["namesArray.sort(function(a, b) {","  return a.localeCompare(b);"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":35},"end":{"row":18,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":4},"end":{"row":18,"column":36}},"text":"namesArray.sort(function(a, b) {"},{"action":"insertText","range":{"start":{"row":18,"column":36},"end":{"row":19,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":19,"column":0},"end":{"row":20,"column":0}},"lines":["  return a.localeCompare(b);"]},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":20},"end":{"row":17,"column":33}},"text":"function(a, b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":4},"end":{"row":17,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":5},"end":{"row":17,"column":6}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":2},"end":{"row":19,"column":4}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":4},"end":{"row":19,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":8,"column":0},"end":{"row":9,"column":0}},"nl":"\n","lines":["    var list = \"å ä ö\".split(\" \");"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":9,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":["console.log(list);"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":9,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":["    console.log(hello);"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["    var hello = 'å'.localeCompare('a');"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":13,"column":0},"end":{"row":14,"column":0}},"nl":"\n","lines":["    //namesArray.sort();"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":4},"end":{"row":3,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":5},"end":{"row":3,"column":6}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":52},"end":{"row":21,"column":53}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":53},"end":{"row":21,"column":54}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":4},"end":{"row":23,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":27,"column":24},"end":{"row":27,"column":25}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":27,"column":25},"end":{"row":27,"column":26}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":35},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":4},"end":{"row":4,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":4},"end":{"row":4,"column":54}},"text":"function logArrayElements(element, index, array) {"},{"action":"insertText","range":{"start":{"row":4,"column":54},"end":{"row":5,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":5,"column":0},"end":{"row":9,"column":0}},"lines":["  console.log('a[' + index + '] = ' + element);","}","","// Note ellision, there is no member at 2 so it isn't visited"]},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":38}},"text":"[2, 5, , 9].forEach(logArrayElements);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":11}},"text":"[2, 5, , 9]"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":1},"end":{"row":9,"column":2}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":3}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"per"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":7}},"text":"persArr"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":4},"end":{"row":11,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":4},"end":{"row":12,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":30},"end":{"row":4,"column":37}},"text":"element"},{"action":"insertText","range":{"start":{"row":4,"column":30},"end":{"row":4,"column":31}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":31},"end":{"row":4,"column":32}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":30},"end":{"row":4,"column":32}},"text":"na"},{"action":"insertText","range":{"start":{"row":4,"column":30},"end":{"row":4,"column":34}},"text":"name"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":38},"end":{"row":5,"column":45}},"text":"element"},{"action":"insertText","range":{"start":{"row":5,"column":38},"end":{"row":5,"column":39}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":38},"end":{"row":5,"column":39}},"text":"n"},{"action":"insertText","range":{"start":{"row":5,"column":38},"end":{"row":5,"column":42}},"text":"name"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":43},"end":{"row":4,"column":48}},"text":"array"},{"action":"insertText","range":{"start":{"row":4,"column":43},"end":{"row":4,"column":44}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":44},"end":{"row":4,"column":45}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":45},"end":{"row":4,"column":46}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":43},"end":{"row":4,"column":46}},"text":"per"},{"action":"insertText","range":{"start":{"row":4,"column":43},"end":{"row":4,"column":50}},"text":"persArr"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":4},"end":{"row":9,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":43},"end":{"row":4,"column":50}},"text":"persArr"},{"action":"insertText","range":{"start":{"row":4,"column":43},"end":{"row":4,"column":44}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":44},"end":{"row":4,"column":45}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":45},"end":{"row":4,"column":46}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":30},"end":{"row":4,"column":34}},"text":"name"},{"action":"insertText","range":{"start":{"row":4,"column":30},"end":{"row":4,"column":31}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":31},"end":{"row":4,"column":32}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":32},"end":{"row":4,"column":33}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":33},"end":{"row":4,"column":34}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":38},"end":{"row":5,"column":42}},"text":"name"},{"action":"insertText","range":{"start":{"row":5,"column":38},"end":{"row":5,"column":39}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":38},"end":{"row":5,"column":39}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":38},"end":{"row":5,"column":39}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":39},"end":{"row":5,"column":40}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":40},"end":{"row":5,"column":41}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":41},"end":{"row":5,"column":42}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":41},"end":{"row":9,"column":42}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":41},"end":{"row":9,"column":42}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":42},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":10,"column":0},"end":{"row":11,"column":0}},"lines":["            "]},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":9}},"text":"        }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":9},"end":{"row":11,"column":10}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":12},"end":{"row":10,"column":13}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":13},"end":{"row":10,"column":14}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":14},"end":{"row":10,"column":15}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":12},"end":{"row":10,"column":15}},"text":"con"},{"action":"insertText","range":{"start":{"row":10,"column":12},"end":{"row":10,"column":19}},"text":"console"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":19},"end":{"row":10,"column":20}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":20},"end":{"row":10,"column":21}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":21},"end":{"row":10,"column":22}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":20},"end":{"row":10,"column":22}},"text":"lo"},{"action":"insertText","range":{"start":{"row":10,"column":20},"end":{"row":10,"column":25}},"text":"log()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":24},"end":{"row":10,"column":25}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":25},"end":{"row":10,"column":26}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":24},"end":{"row":10,"column":26}},"text":"pe"},{"action":"insertText","range":{"start":{"row":10,"column":24},"end":{"row":10,"column":31}},"text":"persArr"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":31},"end":{"row":10,"column":33}},"text":"[]"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":32},"end":{"row":10,"column":33}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":33},"end":{"row":10,"column":34}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":32},"end":{"row":10,"column":34}},"text":"in"},{"action":"insertText","range":{"start":{"row":10,"column":32},"end":{"row":10,"column":37}},"text":"index"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":38},"end":{"row":10,"column":39}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":39},"end":{"row":10,"column":40}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":39},"end":{"row":10,"column":40}},"text":"n"},{"action":"insertText","range":{"start":{"row":10,"column":39},"end":{"row":10,"column":43}},"text":"name"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":44},"end":{"row":10,"column":45}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":44},"end":{"row":10,"column":45}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":44},"end":{"row":10,"column":45}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":31},"end":{"row":10,"column":38}},"text":"[index]"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":9},"end":{"row":11,"column":10}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":41},"end":{"row":9,"column":42}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":42},"end":{"row":9,"column":43}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":9}},"text":"        }"},{"action":"removeText","range":{"start":{"row":10,"column":12},"end":{"row":10,"column":38}},"text":"console.log(persArr.name);"},{"action":"removeText","range":{"start":{"row":10,"column":12},"end":{"row":11,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":14},"end":{"row":5,"column":42}},"text":"'a[' + index + '] = ' + elem"},{"action":"insertText","range":{"start":{"row":5,"column":14},"end":{"row":5,"column":15}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":15},"end":{"row":5,"column":16}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":16},"end":{"row":5,"column":17}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":14},"end":{"row":5,"column":17}},"text":"ele"},{"action":"insertText","range":{"start":{"row":5,"column":14},"end":{"row":5,"column":18}},"text":"elem"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":18},"end":{"row":5,"column":19}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":19},"end":{"row":5,"column":20}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":19},"end":{"row":5,"column":20}},"text":"n"},{"action":"insertText","range":{"start":{"row":5,"column":19},"end":{"row":5,"column":23}},"text":"name"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":2},"end":{"row":5,"column":4}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":4},"end":{"row":5,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":8},"end":{"row":5,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":4}},"text":"    "}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":4},"end":{"row":6,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415806466932}