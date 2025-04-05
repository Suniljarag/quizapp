const questions = [
  {
    question: "भगवद गीता किस युद्ध में सुनाई गई थी?",
    options: ["रामायण युद्ध", "कुरुक्षेत्र युद्ध", "लंका युद्ध", "पानीपत युद्ध"],
    answer: "कुरुक्षेत्र युद्ध"
  },
  {
    question: "भगवद गीता में कुल कितने अध्याय हैं?",
    options: ["16", "18", "20", "12"],
    answer: "18"
  },
  {
    question: "महाभारत में श्रीकृष्ण का क्या मुख्य रोल था?",
    options: ["योद्धा", "रथ चालक", "दर्शक", "राजा"],
    answer: "रथ चालक"
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadNextQuestion() {
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
    q.options.forEach(option => {
      const li = document.createElement("li");
      li.innerText = option;
      li.onclick = () => checkAnswer(option, q.answer, li);
      optionsList.appendChild(li);
    });
    document.getElementById("score").innerText = "";
    answered = false;
    currentQuestion++;
  } else {
    const percent = Math.round((score / questions.length) * 100);
    document.getElementById("question").innerText = "Quiz समाप्त हो गया!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText = `आपका स्कोर: ${score} / ${questions.length} (${percent}%)`;
  }
}

function checkAnswer(selected, correct, element) {
  if (answered) return;
  answered = true;
  if (selected === correct) {
    element.style.backgroundColor = "lightgreen";
    score++;
  } else {
    element.style.backgroundColor = "salmon";
  }
  document.getElementById("score").innerText = `अभी तक स्कोर: ${score}`;
}

window.onload = loadNextQuestion;
