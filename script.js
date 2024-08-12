const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Rome"],
    correct: 0,
  },
  { question: "What is 2 + 2?", answers: ["3", "4", "5"], correct: 1 },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next");
const resultElement = document.getElementById("result");

const displayQuestion = () => {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  answersElement.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    answersElement.appendChild(button);
  });
};

const checkAnswer = (index) => {
  if (index === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
};

const showResult = () => {
  questionElement.classList.add("hidden");
  answersElement.classList.add("hidden");
  resultElement.classList.remove("hidden");
  resultElement.textContent = `Your score is ${score}/${questions.length}`;
};

nextButton.onclick = displayQuestion;

displayQuestion();
