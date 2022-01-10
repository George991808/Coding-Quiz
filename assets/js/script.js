
var startButtonEl = $('#start-btn');
timeLeft = 60

var para = document.createElement("h2");

// define questions
var Q1="What is Life?"
var Q2="What is 2?"
var Q3="What is 3?"
var Q4="What is 4?"


// Define wrong answers
var Wrong1=["a","b","c"]
var Wrong2=["a","b","c"]
var Wrong3=["a","b","c"]
var Wrong4=["a","b","c"]

// Define correct answers
var Correct1="d"
var Correct2="d"
var Correct3="d"
var Correct4="d"




// Click event causes alert light start toggle
startButtonEl.on('click', function () {
    
    setInterval(myTimer, 1000);
    
    para.innerText = "60";               
    document.body.appendChild(para);   
});

function myTimer() {
     timeLeft = timeLeft-1
     para.innerText = timeLeft;
  }