// Questions variable:
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: 2
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: 2
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: 3
    },
    {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: 2
    },
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: 3
    }
  ];

// Var list:
var score = 0; // final score based on time left
var counter = 0; // Spot in the questions array
var questionChoices = document.querySelector(".questionChoices"); // Question choices
var startBtn = document.getElementById("startBtn"); // start button
var userInput = []; // 
var timeLeft = 75 // starting time
var holdInterval;
var penalty = 10; // reduce time
var timerEl = document.getElementById('countdown');
// Start the quiz when start button is clicked

function startQuiz() {
  hideWelcome();
  questionDisplay();
  timer();
}

// Timer function
function timer() {
  var timeInterval = setInterval(function() {

    if (counter > 4 && timeLeft > 0){
  timerEl.textContent = timeLeft 

  }   else if (timeLeft > 0 && counter < 4){
  timeLeft--;
  timerEl.textContent = timeLeft;
  
  }   else if (timeLeft < 0 && counter < 4 ){
  clearInterval(timeInterval);
  // displayMessage = "Your time is up!"
  }
  },1000);
}



// Reduce time by 10 seconds if question is wrong

// Hides the welcome screen when start button is clicked
function hideWelcome() {
  document.getElementById("Welcome-Page").style.display = "none";
}

// Create new question when question is answered
// Provide questions

function questionDisplay() {
        document.getElementById("questionText").textContent = questions[counter].title;
        document.getElementById("optionA").textContent = questions[counter].choices[0];
        document.getElementById("optionB").textContent = questions[counter].choices[1];
        document.getElementById("optionC").textContent = questions[counter].choices[2];
        document.getElementById("optionD").textContent = questions[counter].choices[3];
        counter++
}

console.log(questions[3].title)
// End the quiz when all questions are answered / when timer hits 0

// Prompt user to enter initials

// Save score as remaining time with provided initials


// Add start button event listener
startBtn.addEventListener("click", startQuiz);
questionChoices.addEventListener("click", questionDisplay);