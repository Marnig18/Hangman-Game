// create array for words to guess

var words = ["dog", "cat", "long", "short"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i,", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blank = "_";
var guess = 10
var lettersGuessed = []

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

	gameDiv.innerHTML = updateBlank 
	
	}

}


// .addEventListener("click", start());  

// var start = function(){

// 	chooseWord(words);
	//creates blank
	
document.onkeyup = function(event) {
 
var key = event.key; }

// lettersGuessed.push(key);

// console.log(lettersGuessed)


//guess letters	 
	
		

	










 




























