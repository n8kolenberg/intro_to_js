function print(message) {
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = message;
}


var question;
var answer;
var response;
var correctAnswer = 0;
var inCorrect = 0;
var HTML;

var questions = [
		["What's Batman's real identity?", "bruce wayne"],
		["What's Batman's butler's name?", "alfred"],
		["Who played Batman in the Tim Burton movies?", "michael keaton"],
		// ["How many Christopher Nolan Batman movies were there?", 3]
];

for (var i = 0; i < questions.length; i += 1) {
	
	question = questions[i][0];
	answer = questions[i][1];
	response = prompt(question);

	if (response.toLowerCase() === answer) {
		correctAnswer += 1;
	}
}

print("<p> You have " + correctAnswer + " question(s) correct.");
// if (correctAnswer === questions.length) {
