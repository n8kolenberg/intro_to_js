function print(message) {
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = message;
}


var question;
var answer;
var response;
var correct = 0;
var inCorrect = 0;
var HTML;
var rightAnswers = [];
var wrongAnswers = [];

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
		correct += 1;
		rightAnswers.push(question);


	} else {
		inCorrect += 1;
		wrongAnswers.push(question);

	}
}



print("<p> You have " + correct + " question(s) correct.");

// if (correctAnswer === questions.length) {
