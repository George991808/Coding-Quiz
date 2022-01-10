var score;
var  mainsection = document.getElementById("main");
var startButtonEl = $('#start-btn');
timeLeft = 60;
var scorehistory
var namehistory
var para = document.createElement("h2");
var title = document.getElementById("title");

// define questions
var Q1="Q1";
var Q2="Q2";
var Q3="Q3";
var Q4="Q4?";

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
var CurrentQuestion=0;
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
        mainsection.appendChild(document.createElement("hr")); 
        var scoreMsg = document.createElement("h2");
        if (score ===1) {
            scoreMsg.innerText="You Scored " + score + " point"  
        } else {
            scoreMsg.innerText="You Scored " + score + " points"
        }
        mainsection.appendChild(scoreMsg); 
           
     // Create a form synamically
     var form = document.createElement("form");
    //  form.setAttribute("method", "post");
    //  form.setAttribute("action", "submit");

     // Create an input element for emailID
     var ID = document.createElement("input");
     ID.setAttribute("type", "text");
     ID.setAttribute("name", "User");
     ID.setAttribute("placeholder", "Name");

     // Create a submit button
     var s = document.createElement("button");
     s.setAttribute("class", "btn btn-info");
     s.setAttribute("style", "submit");
     s.setAttribute("value", "Submit");
    s.innerText="Submit"
     // Append the email_ID input to the form
     form.append(ID); 

     // Append the button to the form
     form.append(s); 

     mainsection.appendChild(form);

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
                AnswerButton(event)               
              }
              if (event.target.id==="continue") {
                ContinueButton(event)               
              }
            }
          
           
          })


          function AnswerButton(event) {
                notAnswered=false;
                mainsection.appendChild(document.createElement("hr"));
                var result = document.createElement("p");
               
                if (event.target.innerText===CorrectAnswer) {
                    result.innerText="Correct";
                    score+=1
                } else {
                    result.innerText="You Are Wrong";
                }
                mainsection.appendChild(result)
                var button = document.createElement("button");
                button.innerText="Continue Quiz";
                button.setAttribute("class","btn btn-info")
                button.setAttribute("id","continue")
                 mainsection.appendChild(button); 
          }
          function ContinueButton(event) {
            ClearMain();
            if (CurrentQuestion===CorrectAnswers.length-1){
                timeLeft=0
                CreateResult();
            } else{
                CreateQuestion(CurrentQuestion+1);
                CurrentQuestion+=1
            }
            
           
      }
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

        function logSubmit(event) {
            ClearMain();
            var title = document.createElement("h1");
            title.innerText="Score History";
             mainsection.appendChild(title); 
             mainsection.appendChild(document.createElement("hr")); 
          }

        form.addEventListener('submit', logSubmit);