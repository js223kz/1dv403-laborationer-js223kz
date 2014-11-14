"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		var checkBirthdayFormat = (/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
		
		var now = new Date();
		var daysLeft;
	
		//user input data
		var inputYear = date.slice(0, 4);
		var inputMonth = date.slice(5, 7);
		var inputDay = date.slice(8, 11);
		var inputBirthday = new Date(now.getFullYear(), inputMonth -1, inputDay, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
		
		//check if user input format is valid
		if (!date.match(checkBirthdayFormat)){
		 	throw new Error("Formatet på din födelsedag är ogiltig");
		 }
		 
		 if(inputBirthday.getTime() < now.getTime()){
		 	inputBirthday.setFullYear(inputBirthday.getFullYear() + 1);
		 }
		 
		 
		 //days left from today to birthday
		 daysLeft = (inputBirthday.getTime()-now.getTime())/86400000;
		 
		 if(daysLeft < 0){
		 	throw new Error("Du har redan fyllt år. Grattis i efterskott!");
		 }
		 
		 return Math.ceil(daysLeft);
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};