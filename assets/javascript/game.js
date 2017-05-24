// create array for words to guess

var words = ["dog", "cat", "long", "short"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i,", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blank = "_";
var guess = 10
// var choice = randomWord()
//function to _generate random word
  

var wordChosen = words[Math.floor(Math.random() * words.length)];

console.log(wordChosen);



document.onkeyup = function(event) {
  
var userGuess = event.key;

var wordLength = wordChosen.length;

var letter = wordChosen.charAt(i)


	for (var i = 0; i < wordLength; i++){
		blank = "_ " + blank	
	}
	// for (var i = 0; i < guess; i++){
	// if user guess the letter than the letter will appear

	var updateBlank = "<p>" + blank + "</p>"

	var gameDiv = document.getElementById("game");

	gameDiv.innerHTML = updateBlank 

 for (var j = 0; j < guess; j++){
 	if ( userGuess === letter){
 		var updateLetter = "<p>" + letter + "</p>"
 	}
 		
 		else{
 			guess = guess - 1
 		}

 		

 }

}


























