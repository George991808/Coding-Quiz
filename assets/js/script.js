var score
var  mainsection = document.getElementById("main")
var startButtonEl = $('#start-btn');
timeLeft = 3

var para = document.createElement("h2");
var title = document.getElementById("title")

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

var CorrectAnswers=[Correct1,Correct2,Correct3,Correct4]
var Questions=[Q1,Q2,Q3,Q4]

// Click event causes alert light start toggle
startButtonEl.on('click', function () {
    
    interval =setInterval(myTimer, 1000);
    ClearMain()
    CreateQuestion()
   
});

function myTimer() {
     timeLeft = timeLeft-1;
     para.innerText = "Time Left " + timeLeft;   
     if (timeLeft<=0) {
       
        
        clearInterval(interval)
        ClearMain()
        CreateResult()
        
     }
  }

  function ClearMain() {
    while (mainsection.hasChildNodes()) {  
        mainsection.removeChild(mainsection.firstChild);
      }
    }

    function CreateResult() {
        var title = document.createElement("h1")
        title.innerText="Results";
        mainsection.appendChild(title); 
           
        }

        function CreateQuestion() {
            var title = document.createElement("h1")
            title.innerText="Question";
             mainsection.appendChild(title); 
             mainsection.appendChild(document.createElement("hr")); 
            para.innerText = "Time Left " + timeLeft;               
            mainsection.appendChild(para);  
            para.setAttribute("id", "timer")
            document.getElementById("Question").innerText=Q1;
               
            }
     
    