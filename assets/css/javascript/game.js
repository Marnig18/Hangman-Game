// create array for words to guess

var words = ["owl", "hogwarts", "slytherin", "robe", "wand", ];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i,", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blank = "";
var lettersGuessed = [];
var guessedField = ""
var lettersIn = [];
var guessesLeft = 10
var blankVar = []


var wordChosen = words[Math.floor(Math.random() * words.length)];
	console.log(wordChosen);

	var wordLength = wordChosen.length;
	//split word into array
	var wordArray = wordChosen.split("")
	console.log(wordArray);

function chooseWord(wordChosen){
	
	
	
	for (var i = 0; i < wordLength; i++){
		blank = "_ " + blank


	}

}

	
	



	
	
	// console.log(updateBlank.length)
	// console.log("split no space: " + updateBlank.split(""))
	// console.log("split with space: " + updateBlank.split(" "))
	// debugger;

 


	// blankVar.push(updateBlank.split(""))
	console.log('blankVar: ' + blankVar)
	
function start(){

	chooseWord(wordChosen)
		var updateBlank = blank 
		var gameDiv = document.getElementById("word");
		gameDiv.innerHTML = updateBlank;

		blankVar = updateBlank.split(" ")
		blankVar.length

		console.log(wordArray.indexOf())

		
		}
	


	
 
 document.onkeyup = function(event) {
	var userGuess = event.key; 
	
		if(wordArray.indexOf(userGuess) === -1){
			console.log("works")
			Guesses(userGuess);
			// lettersGuessed.push(userGuess);
			// console.log(lettersGuessed);
			// var afterGuessesLeft = guessesLeft - 1			
	}
		else {
			var gameDiv = document.getElementById("word");
			var letterIndex = wordArray.indexOf(userGuess);
			console.log('letter index:' + letterIndex);
			blankVar[letterIndex] = userGuess; 
			var updateBlankVar = "<p>" + blankVar + "</p>"
			gameDiv.innerHTML = updateBlankVar;
			console.log(updateBlankVar);
			var searched = updateBlankVar.search("_");
		

				console.log("guessesLeft" + guessesLeft);
				if(guessesLeft === 0){
					alert("You Loose");
					}
						else{
							if(searched === -1 ) {
								alert("You Win!")
							}

						}

				
				}
						}

			console.log(blankVar);

			console.log(guessesLeft)


		
			// 	if (searched === -1 ) {
			// 		alert("You Win!")

			// }


		

// var search = blankVar.search(blank);	
			




	
	
	




				
 

	function Guesses (array) {	
		lettersGuessed.push(array);
		console.log(array);
		var afterGuessesLeft = guessesLeft-- 

			console.log("guessesLeft" + guessesLeft);
				if(guessesLeft === 0){
					alert("You Loose");
					reset();
				}

				
		var updateGuessedField = "<p>" + lettersGuessed + "</p>"
		var lettersDiv = document.getElementById("lettersGuessed");
		lettersDiv.innerHTML = "Letters Guessed: " + updateGuessedField
				
		var updateGuessesLeft = "<p>" + guessesLeft + "</p>"
		var guessedDiv = document.getElementById("guessesLeft");
		guessedDiv.innerHTML = "Guesses Left: " + updateGuessesLeft;


	}



function reset(){
	guessesLeft = 10

}
		
				
			

	
		
			// for(letterIndex in wordArray){
				
			

		
		

			
	




		



	// if (afterGuessesLeft = 0){
	// 	alert("You Lost")
	
	// }


	





//guess letters	 
	
		

	










 




























