
const questions = [
    {
        question: "Question 1: What is my favorite meal?",
        options: ["Couscous", "Tacos", "Njimat", "Tarda"],
        answer: "Njimat"
    },
    {
        question: "Question 2: What is the best team in Morocco?",
        options: ["RAC", "WAC", "OCS", "MAS"],
        answer: "OCS"
    },
];

function dq() {
    const questionContainer = document.getElementById("question-container");
    let questionHTML = "";
    questions.forEach((question, index) => {
        questionHTML += `
            <div class="question">
                <p>${question.question}</p>
                <ul>
                    ${question.options
                        .map(
                            (option, optionIndex) => `
                                <li>
                                    <input type="radio" id="option-${index}-${optionIndex}" name="question-${index}" value="${option}">
                                    <label for="option-${index}-${optionIndex}">${option}</label>
                                </li>
                            `
                        )
                        .join("")}
                </ul>
            </div>
        `;
    });
    questionContainer.innerHTML = questionHTML;
}

function cscore() {
    const scoreValue = document.getElementById("score-value");
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });
    scoreValue.textContent = score;
}

function scrollToScore() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.scrollIntoView({ behavior: "smooth" });
}

let timer;
const timeLimit = 60; 

function startTimer() {
    let timeRemaining = timeLimit;
    const timerDisplay = document.getElementById("timer");

    timer = setInterval(() => {
        timerDisplay.textContent = timeRemaining;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timer);
            cscore();
            scrollToScore();
        }
    }, 1000);
}

dq();
startTimer();