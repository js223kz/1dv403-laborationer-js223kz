"use strict";

window.onload = function(){

	var convertString = function(str){

		if(str === ""){
			throw new Error("Du måste skriva in en text");
		}
 		
 		var changedString = "";

		for(var i = 0; i < str.length; i+=1){
				
			var stringChar = str.charAt(i);
				
			if(/[Aa]/g.test(stringChar)){
				stringChar = stringChar.replace(/[Aa]/g, "#");
					
			}else if(/[A-Z]/g.test(stringChar)){
				stringChar = stringChar.toLowerCase();
				
			}else if(/[a-z]/g.test(stringChar)){
				stringChar = stringChar.toUpperCase();
					
			}else{
				
			}
				changedString += stringChar;
			}
		return changedString;
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};