// punteggio
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
const circle1 = document.getElementsByClassName("circle1");
const percCorrect = document.getElementsByClassName("percCorrect");
const percWrong = document.getElementsByClassName("percWrong");
const correctAnswer = document.getElementsByClassName("correctAnswer");
const wrongAnswer = document.getElementsByClassName("wrongAnswer");

let questionCount;
let scoreCount = 0;

const punteggio = () => {
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("wrong");
    // correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
};
