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

let timerDiv = document.getElementsByClassName("timerDiv");
const container = document.querySelector(".container");
let numberOfQuestion = document.querySelector(".numberOfQuestion");
let displayContainer = document.getElementById("displayContainer");
const nextbtn = document.getElementById("nextbtn");
const result = document.querySelector(".result");
const percCorrect = document.querySelector(".percCorrect");
const percWrong = document.querySelector(".percWrong");
const correctAnswer = document.querySelector(".correctAnswer");
const wrongAnswer = document.querySelector(".wrongAnswer");
const dissapear = document.querySelector(".counter");

let questioncount;
let scoreCount;

// timer
let count = 3;
let timerId = setInterval(countdown, 1000);
function countdown() {
  const timeLeft = document.querySelector(".timer");
  timeLeft.innerHTML = count;
  count--;
  progressseconds();
  if (count === 0) {
    clearInterval(countdown);
    displaynext();
  }
}

// next function
nextbtn.addEventListener(
  "click",
  (displaynext = () => {
    questioncount += 1;

    // se ultima domanda

    if (questioncount == questions.length) {
      displayContainer.classList.add("hide");
      numberOfQuestion.classList.add("hide");
      dissapear.classList.add("hide");

      result.classList.remove("hide");
      percCorrect.innerText = scoreCount * 10 + "%";
      percWrong.innerText = (10 - scoreCount) * 10 + "%";
      correctAnswer.innerText = scoreCount + "/10 questions";
      wrongAnswer.innerText = 10 - scoreCount + "/10 questions";
      progress();
    } else {
      displayquiz(questioncount);

      numberOfQuestion.innerHTML =
        questioncount + 1 + "/" + questions.length + " Question";
      // per fare ricominciare il timer ad ogni click del pulsante next
      // bisogna fare ricominciare il timer dandogli un tempo , quindi tre secondi, e togliendo il tempo precedente
      // cioè usando clearinterval. Dopo avergli azzerato il tempo precedente e avergli un dato un altro limite (i trenta secondi)
      // devo fare ricominciare la funzione del timer, quindi mi la vado a richiamare e ad attivare.
      count = 30;
      clearInterval(countdown);
      timerId;
    }
  })
);

// displayquiz
const displayquiz = (questioncount) => {
  let quizcards = document.querySelectorAll(".containerquestion");
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
    div.classList.add("containerquestion", "hide");
    // question number
    numberOfQuestion.innerHTML =
      questioncount + 1 + "/" + questions.length + " Question";
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
        // la keyword this sta ad indicare l'elemento che si sta selezionando , in questo caso il btn selezionato
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
  //   mi vado a prendere ogni singola domanda
  let question =
    document.getElementsByClassName("containerquestion")[questioncount];
  // all'interno di ogni domanda mi prendo tutte le risposte
  let others = question.querySelectorAll(".option-div");

  if (solution === correctanswer) {
    scoreCount += 1;
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(scoreCount);
  clearInterval(countdown);
  others.forEach((item) => {
    item.disabled = true;
  });
};

//  Setup
function initial() {
  questioncount = 0;
  count = 30;
  scoreCount = 0;
  quizCreator();
  displayquiz(questioncount);
  clearInterval(countdown);
  //   timerDisplay();
}

window.onload = () => {
  initial();
};

// dato che non si può riportare il keyframe dal js, si va a creare una funzione che mi faccia aumentare la barra a seconda della percentuale delle risposte corrette

const progress = function () {
  // prima di tutto si va a trovare la percentuale delle risposte corrette
  const percentageCorrect = (scoreCount / questions.length) * 100;
  const circleLength = 912; // lunghezza totale del cerchio
  //   valore della stroke in base alla percentuale
  const strokeDashOffsetValue =
    circleLength - (circleLength * percentageCorrect) / 100;
  // vado a prendermi la classe del cerchio la cui stroke aumenta
  const progressBar = document.querySelector(".js-progressbar");
  //   e ci attribuisco il valore trovato in precedenza
  progressBar.style.strokeDashoffset = strokeDashOffsetValue;
};
// il tutto viene messo all'interno del nextbtn così va araccogliere i dati volta per volta

const progressseconds = function () {
  const progressSeconds = document.querySelector(".js-circlefirst");
  // dato che non ho un array ma conosco il totale dei secondi che devono passare, inserisco quel totale qui
  const percprogr = (count / 30) * 100;
  const firstlength = 472;
  const strokeDashOffsetValue = firstlength - (firstlength * percprogr) / 100;
  progressSeconds.style.strokeDashoffset = strokeDashOffsetValue;
};
