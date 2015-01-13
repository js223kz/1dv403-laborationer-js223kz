{"filter":false,"title":"Template.js","tooltip":"/5-pwd/js/Template.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":2,"column":67},"end":{"row":2,"column":68},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":68},"end":{"row":2,"column":69},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":66},"end":{"row":2,"column":69},"action":"remove","lines":["hei"]},{"start":{"row":2,"column":66},"end":{"row":2,"column":72},"action":"insert","lines":["height"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":72},"end":{"row":2,"column":73},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":73},"end":{"row":2,"column":74},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":74},"end":{"row":2,"column":75},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":75},"end":{"row":2,"column":76},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":76},"end":{"row":2,"column":77},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":77},"end":{"row":2,"column":78},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":78},"end":{"row":2,"column":79},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":79},"end":{"row":2,"column":80},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":4},"end":{"row":55,"column":10},"action":"remove","lines":["var body = document.querySelector(\"body\");","    var wrapper = document.createElement(\"div\");","        wrapper.setAttribute(\"class\", \"templatewrapper\");","        wrapper.id = this.id;","        wrapper.style.left = this.positionY;","        wrapper.style.top = this.positionX;","        wrapper.style.height = height;","        wrapper.style.width = width;","                       ","        body.appendChild(wrapper);","    ","    var template = document.querySelector(\".templatewindow\").innerHTML;","    Mustache.parse(template);","                    ","    var view ={","        text: this.headLine,","    };","    wrapper.innerHTML = Mustache.render(template, view);","    ","    var currentWindow = document.getElementById(this.id);","    var closeBtn = currentWindow.querySelector(\".templateclosebutton\");","        ","        closeBtn.addEventListener(\"click\", function(e){","           e.cancelBubble = true;","           currentWindow.remove();","       });"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":81},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":29,"column":10},"action":"insert","lines":["var body = document.querySelector(\"body\");","    var wrapper = document.createElement(\"div\");","        wrapper.setAttribute(\"class\", \"templatewrapper\");","        wrapper.id = this.id;","        wrapper.style.left = this.positionY;","        wrapper.style.top = this.positionX;","        wrapper.style.height = height;","        wrapper.style.width = width;","                       ","        body.appendChild(wrapper);","    ","    var template = document.querySelector(\".templatewindow\").innerHTML;","    Mustache.parse(template);","                    ","    var view ={","        text: this.headLine,","    };","    wrapper.innerHTML = Mustache.render(template, view);","    ","    var currentWindow = document.getElementById(this.id);","    var closeBtn = currentWindow.querySelector(\".templateclosebutton\");","        ","        closeBtn.addEventListener(\"click\", function(e){","           e.cancelBubble = true;","           currentWindow.remove();","       });"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":21},"end":{"row":7,"column":26},"action":"remove","lines":["this."]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":29},"end":{"row":8,"column":34},"action":"remove","lines":["this."]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":28},"end":{"row":9,"column":33},"action":"remove","lines":["this."]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":14},"end":{"row":19,"column":19},"action":"remove","lines":["this."]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":4},"end":{"row":31,"column":4},"action":"remove","lines":["    ","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":48},"end":{"row":23,"column":53},"action":"remove","lines":["this."]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":32,"column":0},"action":"remove","lines":["var JOSZEP = JOSZEP || {};","JOSZEP.Template = {","    renderTemplate : function(id, positionX, positionY, headLine, height, width){","        ","        var body = document.querySelector(\"body\");","        var wrapper = document.createElement(\"div\");","        wrapper.setAttribute(\"class\", \"templatewrapper\");","        wrapper.id = id;","        wrapper.style.left = positionY;","        wrapper.style.top = positionX;","        wrapper.style.height = height;","        wrapper.style.width = width;","                       ","        body.appendChild(wrapper);","    ","    var template = document.querySelector(\".templatewindow\").innerHTML;","    Mustache.parse(template);","                    ","    var view ={","        text: headLine,","    };","    wrapper.innerHTML = Mustache.render(template, view);","    ","    var currentWindow = document.getElementById(id);","    var closeBtn = currentWindow.querySelector(\".templateclosebutton\");","        ","        closeBtn.addEventListener(\"click\", function(e){","           e.cancelBubble = true;","           currentWindow.remove();","       });","    }","};",""]},{"start":{"row":0,"column":0},"end":{"row":38,"column":2},"action":"insert","lines":["\"use strict\";","","function TemplateWindow(id, positionX, positionY, headLine){","    this.id = id;","    this.positionX = positionX + \"px\";","    this.positionY = positionY + \"px\";","    this.headLine = headLine;","}","","//create template for new window","TemplateWindow.prototype.renderTemplate = function (width, height){","   ","    var body = document.querySelector(\"body\");","    var wrapper = document.createElement(\"div\");","        wrapper.setAttribute(\"class\", \"templatewrapper\");","        wrapper.id = this.id;","        wrapper.style.left = this.positionY;","        wrapper.style.top = this.positionX;","        wrapper.style.height = height;","        wrapper.style.width = width;","                       ","        body.appendChild(wrapper);","    ","    var template = document.querySelector(\".templatewindow\").innerHTML;","    Mustache.parse(template);","                    ","    var view ={","        text: this.headLine,","    };","    wrapper.innerHTML = Mustache.render(template, view);","    ","    var currentWindow = document.getElementById(this.id);","    var closeBtn = currentWindow.querySelector(\".templateclosebutton\");","        ","        closeBtn.addEventListener(\"click\", function(e){","           e.cancelBubble = true;","           currentWindow.remove();","       });","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":52},"end":{"row":10,"column":65},"action":"remove","lines":["width, height"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":10},"end":{"row":38,"column":0},"action":"insert","lines":["",""]},{"start":{"row":38,"column":0},"end":{"row":38,"column":7},"action":"insert","lines":["       "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":6},"end":{"row":38,"column":7},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":5},"end":{"row":38,"column":6},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":4},"end":{"row":38,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":4},"end":{"row":40,"column":7},"action":"insert","lines":["templateWindow.addEventListener(\"click\", function(e){","        body.appendChild(templateWindow);","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":4},"end":{"row":38,"column":18},"action":"remove","lines":["templateWindow"]},{"start":{"row":38,"column":4},"end":{"row":38,"column":5},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":5},"end":{"row":38,"column":6},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":6},"end":{"row":38,"column":7},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":7},"end":{"row":38,"column":8},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":8},"end":{"row":38,"column":9},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":9},"end":{"row":38,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":10},"end":{"row":38,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":25},"end":{"row":39,"column":39},"action":"remove","lines":["templateWindow"]},{"start":{"row":39,"column":25},"end":{"row":39,"column":26},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":26},"end":{"row":39,"column":27},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":27},"end":{"row":39,"column":28},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":28},"end":{"row":39,"column":29},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":29},"end":{"row":39,"column":30},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":30},"end":{"row":39,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":31},"end":{"row":39,"column":32},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":66,"column":2},"action":"remove","lines":["","","","","","","","","","","","\"use strict\";","","function TemplateWindow(id, positionX, positionY, headLine){","    this.id = id;","    this.positionX = positionX + \"px\";","    this.positionY = positionY + \"px\";","    this.headLine = headLine;","}","","//create template for new window","TemplateWindow.prototype.renderTemplate = function (){","   ","    ","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":3},"end":{"row":40,"column":7},"action":"remove","lines":[" var body = document.querySelector(\"body\");","    var wrapper = document.createElement(\"div\");","        wrapper.setAttribute(\"class\", \"templatewrapper\");","        wrapper.id = this.id;","        wrapper.style.left = this.positionY;","        wrapper.style.top = this.positionX;","        //wrapper.style.height = height;","        //wrapper.style.width = width;","                       ","        body.appendChild(wrapper);","    ","    var template = document.querySelector(\".templatewindow\").innerHTML;","    Mustache.parse(template);","                    ","    var view ={","        text: this.headLine,","    };","    wrapper.innerHTML = Mustache.render(template, view);","    ","    var currentWindow = document.getElementById(this.id);","    var closeBtn = currentWindow.querySelector(\".templateclosebutton\");","        ","        closeBtn.addEventListener(\"click\", function(e){","           e.cancelBubble = true;","           currentWindow.remove();","       });","    wrapper.addEventListener(\"click\", function(e){","        body.appendChild(wrapper);","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":29},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":36,"column":7},"action":"insert","lines":[" var body = document.querySelector(\"body\");","    var wrapper = document.createElement(\"div\");","        wrapper.setAttribute(\"class\", \"templatewrapper\");","        wrapper.id = this.id;","        wrapper.style.left = this.positionY;","        wrapper.style.top = this.positionX;","        //wrapper.style.height = height;","        //wrapper.style.width = width;","                       ","        body.appendChild(wrapper);","    ","    var template = document.querySelector(\".templatewindow\").innerHTML;","    Mustache.parse(template);","                    ","    var view ={","        text: this.headLine,","    };","    wrapper.innerHTML = Mustache.render(template, view);","    ","    var currentWindow = document.getElementById(this.id);","    var closeBtn = currentWindow.querySelector(\".templateclosebutton\");","        ","        closeBtn.addEventListener(\"click\", function(e){","           e.cancelBubble = true;","           currentWindow.remove();","       });","    wrapper.addEventListener(\"click\", function(e){","        body.appendChild(wrapper);","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":0},"end":{"row":44,"column":0},"action":"remove","lines":["","//create template for new window","TemplateWindow.prototype.renderTemplate = function (){","   ","   ","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":3},"end":{"row":36,"column":7},"action":"remove","lines":[" var body = document.querySelector(\"body\");","    var wrapper = document.createElement(\"div\");","        wrapper.setAttribute(\"class\", \"templatewrapper\");","        wrapper.id = this.id;","        wrapper.style.left = this.positionY;","        wrapper.style.top = this.positionX;","        //wrapper.style.height = height;","        //wrapper.style.width = width;","                       ","        body.appendChild(wrapper);","    ","    var template = document.querySelector(\".templatewindow\").innerHTML;","    Mustache.parse(template);","                    ","    var view ={","        text: this.headLine,","    };","    wrapper.innerHTML = Mustache.render(template, view);","    ","    var currentWindow = document.getElementById(this.id);","    var closeBtn = currentWindow.querySelector(\".templateclosebutton\");","        ","        closeBtn.addEventListener(\"click\", function(e){","           e.cancelBubble = true;","           currentWindow.remove();","       });","    wrapper.addEventListener(\"click\", function(e){","        body.appendChild(wrapper);","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["    ","   ",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":["T"]},{"start":{"row":8,"column":0},"end":{"row":8,"column":16},"action":"insert","lines":["TemplateWindow()"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":14},"end":{"row":8,"column":16},"action":"remove","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":15},"end":{"row":8,"column":18},"action":"remove","lines":["pro"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":24},"action":"insert","lines":["prototype"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":37},"end":{"row":8,"column":38},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":38},"end":{"row":8,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":39},"end":{"row":8,"column":41},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":39},"end":{"row":8,"column":41},"action":"remove","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":39},"end":{"row":8,"column":40},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":40},"end":{"row":8,"column":41},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":42},"end":{"row":8,"column":43},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":50},"end":{"row":8,"column":52},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":52},"end":{"row":8,"column":53},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":53},"end":{"row":10,"column":1},"action":"insert","lines":["","    ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":37,"column":7},"action":"insert","lines":[" var body = document.querySelector(\"body\");","    var wrapper = document.createElement(\"div\");","        wrapper.setAttribute(\"class\", \"templatewrapper\");","        wrapper.id = this.id;","        wrapper.style.left = this.positionY;","        wrapper.style.top = this.positionX;","        //wrapper.style.height = height;","        //wrapper.style.width = width;","                       ","        body.appendChild(wrapper);","    ","    var template = document.querySelector(\".templatewindow\").innerHTML;","    Mustache.parse(template);","                    ","    var view ={","        text: this.headLine,","    };","    wrapper.innerHTML = Mustache.render(template, view);","    ","    var currentWindow = document.getElementById(this.id);","    var closeBtn = currentWindow.querySelector(\".templateclosebutton\");","        ","        closeBtn.addEventListener(\"click\", function(e){","           e.cancelBubble = true;","           currentWindow.remove();","       });","    wrapper.addEventListener(\"click\", function(e){","        body.appendChild(wrapper);","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":8},"end":{"row":16,"column":38},"action":"remove","lines":["//wrapper.style.height = height;","        //wrapper.style.width = width;"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":4},"end":{"row":15,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":43},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":29},"end":{"row":6,"column":29},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":0,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1421148418054,"hash":"1d824b4229dc566308b6b0ee1b7ff05dafef397b"}