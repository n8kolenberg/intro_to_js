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
		["What was the name of Christopher Nolan's first Batman movie?", "batman begins"]
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

document.write("<p>You've got correct: </p>");
for (var j = 0; j < rightAnswers.length; j+=1) {
	document.write("<ul> <li>" + rightAnswers[j] + "</li></ul>");
}


document.write("<p>You've got wrong: </p>");
for (var j = 0; j < wrongAnswers.length; j+=1) {
	document.write("<ul> <li>" + wrongAnswers[j] + "</li></ul>");
}

