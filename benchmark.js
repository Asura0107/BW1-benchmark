const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

const quizArray = [
  {
    id: "0",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "1",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "2",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "3",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "4",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "5",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "6",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "7",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "8",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
  {
    id: "9",
    questions: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correct: "Central Processing Unit"
  }
];

let timeLeft = document.getElementsByClassName("time-left");
let timerDiv = document.getElementsByClassName("timerDiv");
let container = document.getElementsByClassName("container");
let countOfQuestion = document.querySelector(".numberOfQuestion");
let displayContainer = document.getElementById("displayContainer");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// timer

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      displayNext();
    }
  }, 1000);
};

function quizCreator() {
  questions.sort(() => Math.random() - 0.5);

  // generate quiz
  for (let q of questions) {
    q.options.sort(() => Math.random() - 0.5);
    // quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    // question number
    countOfQuestion.innerHTMLm = 1 + " of" + questions.length + " Question";
    // question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = q.question;
    div.appendChild();
    // options
    div.innerHTML += `
      <button class="option-div" onclick="checker()">
        ${q.options[0]}
      </button> ;
    <button class="option-div" onclick="checker()">
      ${q.options[1]}
    </button>;
    <button class="option-div" onclick="checker()">
      ${q.options[2]}
    </button>;;
    <button class="option-div" onclick="checker()">
      ${q.options[3]}
    </button>`;
    container.appendChild(div);
  }
}

// checker function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question = document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  // if user clicked answer == correct option stored in object
  if (userSolution === questions[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    // for making the correct option
    options.forEach((element) => {
      if (element.innerText == questions[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
}

// Setup
function initial() {
  questionCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
}
