const questionsToPut = {
  question1: {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>",
    choice2: "<js>",
    choice3: "<javascript>",
    choice4: "<scripting>",
    answer: "<script>",
  },
  question2: {
    question: "Which HTML tag is used to define a hyperlink?",
    choice1: "<a>",
    choice2: "<link>",
    choice3: "<href>",
    choice4: "<url>",
    answer: "<a>",
  },
  question3: {
    question: "Which tag is used to display an image?",
    choice1: "<pic>",
    choice2: "<img>",
    choice3: "<image>",
    choice4: "<src>",
    answer: "<img>",
  },
  question4: {
    question: "Which HTML element defines the largest heading?",
    choice1: "<h1>",
    choice2: "<h3>",
    choice3: "<h6>",
    choice4: "<header>",
    answer: "<h1>",
  },
  question5: {
    question: "Which attribute specifies the image source?",
    choice1: "src",
    choice2: "href",
    choice3: "alt",
    choice4: "link",
    answer: "src",
  },
  question6: {
    question: "Which HTML tag is used for a line break?",
    choice1: "<break>",
    choice2: "<lb>",
    choice3: "<br>",
    choice4: "<newline>",
    answer: "<br>",
  },
  question7: {
    question: "Which CSS property changes the text color?",
    choice1: "color",
    choice2: "font-color",
    choice3: "text-color",
    choice4: "bgcolor",
    answer: "color",
  },
  question8: {
    question: "Which property is used to change font size in CSS?",
    choice1: "font-size",
    choice2: "text-size",
    choice3: "font",
    choice4: "text-style",
    answer: "font-size",
  },
  question9: {
    question: "Which property sets the background color in CSS?",
    choice1: "background",
    choice2: "bgcolor",
    choice3: "background-color",
    choice4: "color",
    answer: "background-color",
  },
  question10: {
    question: "Which symbol is used for ID selector in CSS?",
    choice1: "#",
    choice2: ".",
    choice3: "@",
    choice4: "$",
    answer: "#",
  },
};

const questionNumber = document.querySelector("#question-number");
const question = document.querySelector(".question");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const choice4 = document.querySelector("#choice4");
const mcqs = document.querySelectorAll(".choices");
const timer = document.querySelector("#timer");
const next = document.querySelector(".next");

let currentQuestion = 1;
let timerInterval;
let timeLeft = 30;
window.onload = () => {
  questionNumber.innerHTML = `1/10`;
  question.innerHTML = questionsToPut.question1.question;
  choice1.textContent = questionsToPut.question1.choice1;
  choice2.textContent = questionsToPut.question1.choice2;
  choice3.textContent = questionsToPut.question1.choice3;
  choice4.textContent = questionsToPut.question1.choice4;
  startTimer();
};
next.addEventListener("click", () => {
  goToNextQuestion();
});

function startTimer() {
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      timer.innerHTML = "00:00";
      // Auto-trigger next question when time runs out
      goToNextQuestion();
    }
  }, 1000);
}

function goToNextQuestion() {
  currentQuestion++;
  if (currentQuestion > 10) {
    clearInterval(timerInterval);
    // Store the score before redirecting
    localStorage.setItem('quizScore', correctAnswers);
    localStorage.setItem('totalQuestions', 10);
    window.location.href = "results.html";
    return;
  }

  // Reset choices for new question
  resetChoices();

  // Update question content
  questionNumber.innerHTML = `${currentQuestion}/10`;
  question.innerHTML = questionsToPut[`question${currentQuestion}`].question;
  choice1.textContent = questionsToPut[`question${currentQuestion}`].choice1;
  choice2.textContent = questionsToPut[`question${currentQuestion}`].choice2;
  choice3.textContent = questionsToPut[`question${currentQuestion}`].choice3;
  choice4.textContent = questionsToPut[`question${currentQuestion}`].choice4;

  // Reset and restart timer for new question
  clearInterval(timerInterval);
  timeLeft = 30;
  startTimer();
}
let correctAnswers = 0;
let questionAnswered = false;

// Add click event listeners to each choice
choice1.addEventListener("click", () => checkAnswer(choice1));
choice2.addEventListener("click", () => checkAnswer(choice2));
choice3.addEventListener("click", () => checkAnswer(choice3));
choice4.addEventListener("click", () => checkAnswer(choice4));

function checkAnswer(clickedChoice) {
  // Prevent multiple answers for the same question
  if (questionAnswered) return;
  
  questionAnswered = true;
  const correctAnswer = questionsToPut[`question${currentQuestion}`].answer;
  
  // Check if the clicked choice is correct
  if (clickedChoice.textContent === correctAnswer) {
    // Correct answer - make it green
    clickedChoice.style.border = "3px solid #01AB08";
    clickedChoice.style.backgroundColor = "#E8F5E8";
    correctAnswers++;
  } else {
    // Wrong answer - make clicked choice red
    clickedChoice.style.border = "3px solid #FF0000";
    clickedChoice.style.backgroundColor = "#FFE8E8";
    
    // Find and highlight the correct answer in green
    const choices = [choice1, choice2, choice3, choice4];
    choices.forEach(choice => {
      if (choice.textContent === correctAnswer) {
        choice.style.border = "3px solid #01AB08";
        choice.style.backgroundColor = "#E8F5E8";
      }
    });
  }
  
  // Disable all choices after answering
  disableAllChoices();
}

function disableAllChoices() {
  const choices = [choice1, choice2, choice3, choice4];
  choices.forEach(choice => {
    choice.style.pointerEvents = "none";
    choice.style.cursor = "default";
  });
}

function resetChoices() {
  const choices = [choice1, choice2, choice3, choice4];
  choices.forEach(choice => {
    choice.style.border = "";
    choice.style.backgroundColor = "";
    choice.style.pointerEvents = "auto";
    choice.style.cursor = "pointer";
  });
  questionAnswered = false;
}
