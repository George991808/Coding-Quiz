var score;
var mainsection = document.getElementById("main");
var startButtonEl = $("#start-btn");
timeLeft = 60;
var scorehistory = [];
var namehistory = [];
var para = document.createElement("h2");
var title = document.getElementById("title");

// define questions
var Q1 = "What is a .css file?";
var Q2 = "Which isnt a Javascript data type?";
var Q3 = "how many tracks in adeles latest album";
var Q4 = "What is an object?";

var questionOrder = [0, 1, 2, 3];
var optionsOrder = [0, 1, 2, 3];

// Define wrong answers
var Wrong1 = ["a banana", "subsidiary of CIA", "all of the above"];
var Wrong2 = ["Number", "String", "boolean"];
var Wrong3 = ["Too many", "not enough", "2"];
var Wrong4 = ["not sure", "boolean", "3"];

// Define correct answers
var Correct1 = "Cascading Style Sheets";
var Correct2 = "milkshake";
var Correct3 = "12";
var Correct4 = "abstract data type";
var CorrectAnswer;
var CurrentQuestion = 0;
var CorrectAnswers = [Correct1, Correct2, Correct3, Correct4];
var Questions = [Q1, Q2, Q3, Q4];
var WrongAnswers = [Wrong1, Wrong2, Wrong3, Wrong4];
var form;
var Options1 = Wrong1;
Options1.push(Correct1);
var Options2 = Wrong2;
Options2.push(Correct2);
var Options3 = Wrong3;
Options3.push(Correct3);
var Options4 = Wrong4;
Options4.push(Correct4);

var Options = [Options1, Options2, Options3, Options4];

// Click event causes alert light start toggle
startButtonEl.on("click", function () {
  score = 0;
  CreateRandomOrder(questionOrder);

  interval = setInterval(myTimer, 1000);
  ClearMain();
  CreateQuestion(questionOrder[0]);
});
//Timer used for the quiz
function myTimer() {
  timeLeft = timeLeft - 1;
  para.innerText = "Time Left " + timeLeft;
  if (timeLeft <= 0) {
    clearInterval(interval);
    ClearMain();
    CreateResult();
  }
}

function ClearMain() {
  while (mainsection.hasChildNodes()) {
    mainsection.removeChild(mainsection.firstChild);
  }
}

function CreateResult() {
  var title = document.createElement("h1");
  title.innerText = "Results";
  mainsection.appendChild(title);
  mainsection.appendChild(document.createElement("hr"));
  var scoreMsg = document.createElement("h2");
  if (score === 1) {
    scoreMsg.innerText = "You Scored " + score + " point";
  } else {
    scoreMsg.innerText = "You Scored " + score + " points";
  }
  mainsection.appendChild(scoreMsg);

  // Create a form
  var form = document.createElement("form");
  //  form.setAttribute("method", "post");
  // form.setAttribute("action", "submit");

  // Create an input element for name
  var ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "User");
  ID.setAttribute("placeholder", "Name");

  // Create a submit button
  var s = document.createElement("button");
  s.setAttribute("class", "btn btn-info");
  s.setAttribute("style", "submit");
  s.setAttribute("value", "Submit");
  s.innerText = "Submit";
  // Append the name input to the form
  form.append(ID);

  // Append the button to the form
  form.append(s);

  mainsection.appendChild(form);
}

function CreateQuestion(questionNumber) {
  notAnswered = true;

  CreateRandomOrder(optionsOrder);
  var title = document.createElement("h1");
  title.innerText = Questions[questionNumber];
  mainsection.appendChild(title);
  mainsection.appendChild(document.createElement("hr"));
  CorrectAnswer = CorrectAnswers[questionNumber];

  for (let i = 0; i < optionsOrder.length; i++) {
    var button = document.createElement("button");
    button.innerText = Options[questionNumber][optionsOrder[i]];
    button.setAttribute("class", "btn btn-info");
    button.setAttribute("id", "answer");
    mainsection.appendChild(button);
    mainsection.appendChild(document.createElement("hr"));
  }

  para.innerText = "Time Left " + timeLeft;
  mainsection.appendChild(para);
  para.setAttribute("id", "timer");
}

function CreateRandomOrder(points) {
  for (i = points.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
}

mainsection.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    if (event.target.id === "answer" && notAnswered) {
      AnswerButton(event);
    }
    if (event.target.id === "continue") {
      ContinueButton(event);
    }
  }
});

function AnswerButton(event) {
  notAnswered = false;
  mainsection.appendChild(document.createElement("hr"));
  var result = document.createElement("p");

  if (event.target.innerText === CorrectAnswer) {
    result.innerText = "Correct";
    score += 1;
  } else {
    result.innerText = "You Are Wrong";
  }
  mainsection.appendChild(result);
  var button = document.createElement("button");
  button.innerText = "Continue Quiz";
  button.setAttribute("class", "btn btn-info");
  button.setAttribute("id", "continue");
  mainsection.appendChild(button);
}
function ContinueButton(event) {
  ClearMain();
  if (CurrentQuestion === CorrectAnswers.length - 1) {
    timeLeft = 0;
    CreateResult();
  } else {
    CreateQuestion(questionOrder[CurrentQuestion + 1]);
    CurrentQuestion += 1;
  }
}
function CheckAnswer() {
  mainsection.appendChild(document.createElement("hr"));
  var result = document.createElement("p");
  If;

  mainsection.appendChild(button);
  mainsection.appendChild(document.createElement("hr"));

  for (i = points.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
}

function logSubmit(event) {
  event.preventDefault();
  ClearMain();
  var title = document.createElement("h1");
  title.innerText = "Score History";
  mainsection.appendChild(title);
  mainsection.appendChild(document.createElement("hr"));
  scorehistory.push(score);
  //namehistory.push(form.ID.User);
  var list = document.createElement("ul");
  mainsection.appendChild(list);
  for (let i = 0; i < scorehistory.length; i++) {
    var scoreitem = document.createElement("li");
    scoreitem.innerText = scorehistory[i];
    list.appendChild(scoreitem);
  }
}

mainsection.addEventListener("submit", logSubmit);
