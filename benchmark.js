const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    answers: [
      "Central Processing Unit",
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    answers: ["Final", "Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    answers: ["False", "True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    answers: ["False", "True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    answers: [".svg", ".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    answers: [
      "Cascading Style Sheet",
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    answers: ["Nougat", "Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    answers: ["140", "120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    answers: ["False", "True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    answers: ["Java", "Python", "C", "Jakarta"]
  }
];

// let timeLeft = document.getElementsByClassName("time-left");
let timerDiv = document.getElementsByClassName("timerDiv");
const container = document.querySelector(".container");
let numberOfQuestion = document.querySelector(".numberOfQuestion");
let displayContainer = document.getElementById("displayContainer");
const nextbtn = document.getElementById("nextbtn");
const result = document.querySelector(".result");
const timepoof = document.querySelector("counter");
// const header = document.getElementsByTagName("header");
// const footer = document.getElementsByTagName("footer");
let questioncount;
let scoreCount;

// timer
let count = 3;
let timerId = setInterval(countdown, 1000);
function countdown() {
  const timeLeft = document.querySelector(".timer");
  if (count === 0) {
    displaynext();
    clearInterval(timerId);
  } else {
    timeLeft.innerHTML = count + "s";
    count--;
  }
}

// setTimeout(() => {
//   displayNext();
// }, 30000);

// next function
nextbtn.addEventListener(
  "click",
  (displaynext = () => {
    questioncount += 1;

    // se ultima domanda

    if (questioncount == questions.length) {
      displayContainer.classList.add("hide");
      numberOfQuestion.classList.add("hide");
      //   header.classList.add("hide");
      //   timepoof.classList.add("hide");

      result.classList.remove("hide");
    } else {
      displayquiz(questioncount);
      //   timerId();
      numberOfQuestion.innerHTML =
        questioncount + 1 + " of " + questions.length + " Question";
    }
  })
);

// displayquiz
const displayquiz = (questioncount) => {
  let quizcards = document.querySelectorAll(".container-mid");
  //hide other
  quizcards.forEach((card) => {
    card.classList.add("hide");
  });
  // display current card
  quizcards[questioncount].classList.remove("hide");
};

function quizCreator() {
  //   questions.sort(() => Math.random() - 0.5);

  // generate quiz
  for (let q of questions) {
    // q.options.sort(() => Math.random() - 0.5);
    // quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    // question number
    numberOfQuestion.innerHTML =
      questioncount + 1 + " of " + questions.length + " Question";
    // question

    let question_DIV = document.createElement("h1");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = q.question;

    div.appendChild(question_DIV);
    // options
    for (let i = 0; i < q.answers.length; i++) {
      const btn = document.createElement("button");
      btn.classList.add("option-div");
      btn.innerHTML = q.answers[i];
      div.appendChild(btn);

      btn.onclick = function (e) {
        notselected();
        // la keyword this sta ad indicare l'elemento che si sta selezionando
        check(this);

        e.currentTarget.classList.add("selected");
      };
      //   btn.disabled = true;
      //   btn.addEventListener("click", check());
    }
    container.appendChild(div);
  }
}

const notselected = () => {
  const previouslyselected = document.querySelector(".selected");
  if (previouslyselected) {
    previouslyselected.classList.remove("selected");
  }
};

// checker function to check if option is correct or not
const check = function (selected) {
  const solution = selected.innerText;
  const correctanswer = questions[questioncount].correct_answer;
  if (solution === correctanswer) {
    scoreCount += 10;
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(scoreCount);
  clearInterval(countdown);
};

// function check(userOption) {
//   let userSolution = userOption.innerText;
//   let question =
//     document.getElementsByClassName("container-mid")[questionCount];
//   let options = question.querySelectorAll(".option-div");

//   // if user clicked answer == correct option stored in object
//   if (userSolution === questions[questionCount].correct) {
//     userOption.classList.add("correct");
//     scoreCount++;
//   } else {
//     userOption.classList.add("incorrect");
//     // for making the correct option
//     options.forEach((element) => {
//       if (element.innerText == questions[questionCount].correct) {
//         element.classList.add("correct");
//       }
//     });
//   }
// }

//  Setup
function initial() {
  questioncount = 0;
  count = 31;
  scoreCount = 0;
  quizCreator();
  displayquiz(questioncount);
  clearInterval(countdown);
  //   timerDisplay();
}

window.onload = () => {
  initial();
};
