// create array for words to guess

var words = ["dog", "cat", "long", "short"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i,", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blank = "";
var lettersGuessed = [];
var guessedField = ""
var lettersIn = [];
var guessesLeft = 10
var blankVar = []




function start(){
	var wordChosen = words[Math.floor(Math.random() * words.length)];
	console.log(wordChosen);
	var wordLength = wordChosen.length;
	//split word into array
	var wordArray = wordChosen.split("")
	console.log(wordArray);
	
	for (var i = 0; i < wordLength; i++){
		blank = "_ " + blank

	var updateBlank = "<p>" + blank + "</p>"

	var gameDiv = document.getElementById("game");

	gameDiv.innerHTML = updateBlank;

	
	}

	blankVar.push(blank)
	console.log(blankVar)

 	document.onkeyup = function(event) {
 
	var userGuess = event.key; 

	

	
	
		if(wordArray.indexOf(userGuess) === -1){
			console.log("works")
			lettersGuessed.push(userGuess);
			console.log(lettersGuessed);
			var afterGuessesLeft = guessesLeft - 1

			var updateGuessedField = "<p>" + userGuess + "</p>"
			var lettersDiv = document.getElementById("lettersGuessed");
			lettersDiv.innerHTML = "Letters Guessed: " + updateGuessedField
			
			var updateGuessesLeft = "<p>" + afterGuessesLeft + "</p>"
			var guessedDiv = document.getElementById("guessesLeft");
			guessedDiv.innerHTML = "Guesses Left: " + updateGuessesLeft;

	}
		else {
			var letterIndex = wordArray.indexOf(userGuess);
			console.log(letterIndex)
			
			blankVar[letterIndex] = userGuess 

			
			console.log(blankVar);
			
			gameDiv.innerHTML =  blankVar

		

	

				// console.log(letterIndex)
				// letterReplace(letterIndex);
			// }
		


			// letterReplace(wordArray)



			// console.log("works")
			// lettersIn.push(userGuess);
			// console.log(lettersIn);

		}
		
		}
}
	

			

			
		
		
			// for(letterIndex in wordArray){
				
			

		
		

		

				
			




		



	// if (afterGuessesLeft = 0){
	// 	alert("You Lost")
	
	// }


	





//guess letters	 
	
		

	










 




























