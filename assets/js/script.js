var score;
var  mainsection = document.getElementById("main");
var startButtonEl = $('#start-btn');
timeLeft = 60;

var para = document.createElement("h2");
var title = document.getElementById("title");

// define questions
var Q1="What is Life?";
var Q2="What is 2?";
var Q3="What is 3?";
var Q4="What is 4?";

var questionOrder = [0, 1, 2, 3];
var optionsOrder = [0, 1, 2, 3];

// Define wrong answers
var Wrong1=["a","b","c"];
var Wrong2=["a","b","c"];
var Wrong3=["a","b","c"];
var Wrong4=["a","b","c"];

// Define correct answers
var Correct1="d";
var Correct2="d";
var Correct3="d";
var Correct4="d";
var CorrectAnswer;
var CorrectAnswers=[Correct1,Correct2,Correct3,Correct4];
var Questions=[Q1,Q2,Q3,Q4];
var WrongAnswers=[Wrong1,Wrong2,Wrong3,Wrong4];

var Options1=Wrong1;
Options1.push(Correct1);
var Options2=Wrong2;
Options2.push(Correct2);
var Options3=Wrong3;
Options3.push(Correct3);
var Options4=Wrong4;
Options4.push(Correct4);

var Options=[Options1,Options2,Options3,Options4];

// Click event causes alert light start toggle
startButtonEl.on('click', function () {
    
    score=0;
    CreateRandomOrder(questionOrder);
    
    interval =setInterval(myTimer, 1000);
    ClearMain();
    CreateQuestion(questionOrder[0]);
   
});

function myTimer() {
     timeLeft = timeLeft-1;
     para.innerText = "Time Left " + timeLeft;   
     if (timeLeft<=0) {
       
        
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
        title.innerText="Results";
        mainsection.appendChild(title); 
           
        }

        function CreateQuestion(questionNumber) {
            notAnswered=true
            CreateRandomOrder(optionsOrder);
            var title = document.createElement("h1");
            title.innerText=Questions[questionNumber];
             mainsection.appendChild(title); 
             mainsection.appendChild(document.createElement("hr")); 
             CorrectAnswer=CorrectAnswers[questionNumber]

             for (let i = 0; i < optionsOrder.length; i++) {
                var button = document.createElement("button");
                button.innerText=Options[questionNumber][optionsOrder[i]];
                button.setAttribute("class","btn btn-info")
                button.setAttribute("id","answer")
                 mainsection.appendChild(button); 
                 mainsection.appendChild(document.createElement("hr")); 
              }
          


          
            para.innerText = "Time Left " + timeLeft;               
            mainsection.appendChild(para);  
            para.setAttribute("id", "timer")
            
               
            }
     
    function CreateRandomOrder(points) {
           

            for (i = points.length -1; i > 0; i--) {
              j = Math.floor(Math.random() * i)
              k = points[i]
              points[i] = points[j]
              points[j] = k
            }
        }

        mainsection.addEventListener('click', (event) => {
            
            if (event.target.nodeName === 'BUTTON') {
              if (event.target.id==="answer" && notAnswered) {
                notAnswered=false;
                mainsection.appendChild(document.createElement("hr"));
                var result = document.createElement("p");
               
                if (event.target.innerText===CorrectAnswer) {
                    result.innerText="Correct";
                } else {
                    result.innerText="You Are Wrong";
                }
                mainsection.appendChild(result)
                
              }
            }
          
           
          })

          function CheckAnswer() {
            mainsection.appendChild(document.createElement("hr"))
            var result = document.createElement("p");
            If 

            mainsection.appendChild(button); 
                 mainsection.appendChild(document.createElement("hr")); 

            for (i = points.length -1; i > 0; i--) {
              j = Math.floor(Math.random() * i)
              k = points[i]
              points[i] = points[j]
              points[j] = k
            }
        }