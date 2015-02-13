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


function buildList(arr) {
	var listHTML = "<ol>";
	for (var i = 0; i < arr.length; i += 1) {
		listHTML+= "<li>" + arr[i] + "</li>";
	}
  listHTML += "</ol>";
  return listHTML;
}

HTML = "<p> You've got the following questions right: </p>";
HTML += buildList(rightAnswers);
HTML += "<p> You've got the following questions wrong: </p>";
HTML += buildList(wrongAnswers);

print(HTML);

