const questions = [
    {
        question: "Qual componente é considerado o 'cérebro' do computador?",
        options: ["Placa de vídeo", "Processador (CPU)", "Memória RAM", "Disco rígido (HD)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual programa é usado para criar planilhas?",
        options: ["Word", "PowerPoint", "Excel", "Photoshop"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que significa a sigla 'PDF'?",
        options: ["Portable Document Format", "Personal Data File", "Printable Document Form", "Public Digital File"],
        answer: 0,
        userAnswer: null
    },
    {
        question: "Qual sistema operacional é desenvolvido pela Microsoft?",
        options: ["macOS", "Linux", "Windows", "Android"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é um 'browser'?",
        options: ["Um programa para editar textos", "Um navegador de internet", "Um antivírus", "Um sistema operacional"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual tecla de atalho é usada para copiar um texto?",
        options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual desses NÃO é um dispositivo de armazenamento?",
        options: ["Pen Drive", "SSD", "Monitor", "HD Externo"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é um 'email'?",
        options: ["Um tipo de rede social", "Uma mensagem eletrônica", "Um programa de edição de vídeo", "Um sistema operacional"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual desses é um exemplo de sistema operacional livre (open source)?",
        options: ["Windows 10", "macOS", "Linux", "iOS"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é 'Wi-Fi'?",
        options: ["Um tipo de cabo de internet", "Uma tecnologia de rede sem fio", "Um navegador de internet", "Um sistema de armazenamento"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual programa é usado para criar apresentações?",
        options: ["Word", "Excel", "PowerPoint", "Notepad"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que significa 'HTTP'?",
        options: ["HyperText Transfer Protocol", "High Tech Text Processor", "Home Tool Transfer Program", "Hyper Transfer Text Protocol"],
        answer: 0,
        userAnswer: null
    },
    {
        question: "Qual tecla é usada para dar espaço entre palavras?",
        options: ["Enter", "Shift", "Tab", "Barra de Espaço"],
        answer: 3,
        userAnswer: null
    },
    {
        question: "O que é um 'vírus de computador'?",
        options: ["Um programa útil", "Um hardware especial", "Um software malicioso", "Um tipo de navegador"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Qual desses NÃO é um serviço de e-mail?",
        options: ["Gmail", "Outlook", "WhatsApp", "Yahoo Mail"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que o ícone da 'lixeira' representa?",
        options: ["Local de arquivos excluídos", "Pasta de documentos", "Disco rígido", "Área de trabalho"],
        answer: 0,
        userAnswer: null
    },
    {
        question: "Qual comando desfaz a última ação no computador?",
        options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + C"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "O que é um 'backup'?",
        options: ["Um tipo de vírus", "Uma cópia de segurança de dados", "Um programa de edição de texto", "Um navegador de internet"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual desses é um componente de hardware?",
        options: ["Windows", "Google Chrome", "Memória RAM", "Word"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que significa 'URL'?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "Unique Resource Locator", "United Resource Locator"],
        answer: 1,
        userAnswer: null
    }
];

// Elementos do DOM
// ... (existing elements)
const detailedResultsElement = document.getElementById('detailed-results'); // Add this
const quizElement = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const questionCounterElement = document.getElementById('question-counter');
const progressBarElement = document.getElementById('progress-bar');
const resultContainerElement = document.getElementById('result-container');
const resultScoreElement = document.getElementById('result-score');
const resultMessageElement = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
// const detailedResultsElement = document.getElementById('detailed-results'); // This was the duplicate
const reviewButton = document.getElementById('review-btn');
const reviewNavElement = document.getElementById('review-nav');
const prevReviewButton = document.getElementById('prev-review-btn');
const nextReviewButton = document.getElementById('next-review-btn');
const exitReviewButton = document.getElementById('exit-review-btn');
const quizContainerElement = document.querySelector('.quiz-container'); // To add a class for review mode styling
const highScoreDisplayElement = document.getElementById('high-score-display');

const HIGH_SCORE_KEY = 'quizHighScore';

// Function to get high score from local storage
function getHighScore() {
    return parseInt(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
}

// Function to set high score in local storage
function setHighScore(newScore) {
    localStorage.setItem(HIGH_SCORE_KEY, newScore);
}

// Function to update high score display
function updateHighScoreDisplay() {
    const highScore = getHighScore();
    highScoreDisplayElement.textContent = `HighScore: ${highScore}/${questions.length}`;
}

// Variáveis do quiz
let isInReviewMode = false;
let currentReviewQuestionIndex = 0;
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let quizCompleted = false;

// Carregar questão
function loadQuestion() {
    quizContainerElement.classList.remove('review-mode'); // Ensure not in review mode styling
    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    questionData.options.forEach((optionString, index) => { // optionItem is now optionString
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = optionString; // Directly set text content

        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsElement.appendChild(optionElement);
    });

    updateProgress();
    nextButton.style.display = 'inline-block';
    reviewNavElement.style.display = 'none';
    nextButton.disabled = true;
    selectedOption = null;
}

// Selecionar opção
function selectOption(e) {
    if (quizCompleted) return;

    const selectedElement = e.target;
    const optionIndex = parseInt(selectedElement.dataset.index);

    // Remover seleção anterior
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
    });

    // Marcar opção selecionada
    selectedElement.classList.add('selected');
    selectedOption = optionIndex;
    // Store user's answer
    questions[currentQuestion].userAnswer = optionIndex; // Add this line
    nextButton.disabled = false;
}

// Verificar resposta
function checkAnswer() {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        option.classList.remove('correct', 'wrong');
        if (index === question.answer) {
            option.classList.add('correct');
        } else if (index === selectedOption && index !== question.answer) {
            option.classList.add('wrong');
        }
    });

    if (selectedOption === question.answer) {
        score++;
    }

    nextButton.textContent = currentQuestion < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado';
}

// Próxima questão ou mostrar resultado
function nextQuestion() {
    if (selectedOption === null) return;

    checkAnswer();

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

// Atualizar progresso
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBarElement.style.width = `${progress}%`;
    questionCounterElement.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
}

// Mostrar resultado
function showResult() {
    quizElement.style.display = 'none';
    resultContainerElement.style.display = 'block';
    resultScoreElement.textContent = `${score}/${questions.length}`;

    const percentage = (score / questions.length) * 100;
    let message = '';

    if (percentage >= 80) {
        message = 'Excelente! Você domina os conceitos de informática básica!';
    } else if (percentage >= 60) {
        message = 'Muito bom! Você tem um bom conhecimento de informática!';
    } else if (percentage >= 40) {
        message = 'Bom! Com um pouco mais de estudo você melhora ainda mais!';
    } else {
        message = 'Continue estudando! A prática leva à perfeição!';
    }

    resultMessageElement.textContent = message;
    quizCompleted = true; // Quiz is completed, but not necessarily review
    reviewButton.style.display = 'inline-block'; // Show review button

    // Check and update high score
    const currentHighScore = getHighScore();
    if (score > currentHighScore) {
        setHighScore(score);
        updateHighScoreDisplay(); // Update display immediately
        // Optionally, add a message like "New High Score!"
        resultMessageElement.textContent += " Parabéns, novo recorde!";
    }

    detailedResultsElement.innerHTML = '<h3>Resumo Detalhado:</h3>';
    questions.forEach((q, index) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.textContent = `P${index + 1}: ${q.question}`;

        const userAnswerTextP = document.createElement('p');
        userAnswerTextP.classList.add('user-answer');
        // q.options[q.userAnswer] will now be a string
        const userAnswerDisplay = q.userAnswer !== null ? q.options[q.userAnswer] : "Não respondida";
        userAnswerTextP.innerHTML = `Sua resposta: <span class="${q.userAnswer === q.answer ? 'correct' : 'wrong'}">${userAnswerDisplay}</span>`;
        if (q.userAnswer === null) {
            userAnswerTextP.querySelector('span').classList.remove('correct', 'wrong');
        }

        const correctAnswerTextP = document.createElement('p');
        // q.options[q.answer] will now be a string
        const correctAnswerDisplay = q.options[q.answer];
        correctAnswerTextP.innerHTML = `Resposta correta: <span class="correct-answer">${correctAnswerDisplay}</span>`;

        resultItem.appendChild(questionText); // Corrected: questionTextP to questionText
        resultItem.appendChild(userAnswerTextP);
        resultItem.appendChild(correctAnswerTextP);
        detailedResultsElement.appendChild(resultItem);
    });
}

// Reiniciar quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizCompleted = false;
    // Reset userAnswer for all questions
    questions.forEach(q => q.userAnswer = null); // Add this line
    quizElement.style.display = 'block';
    resultContainerElement.style.display = 'none';
    detailedResultsElement.innerHTML = '<h3>Resumo Detalhado:</h3>'; // Clear detailed results

    reviewButton.style.display = 'none'; // Hide review button on restart
    if (isInReviewMode) { // Ensure review mode specific UI is reset
        exitReviewMode();
    }

    loadQuestion();
    nextButton.textContent = 'Próxima Pergunta'; // Reset button text
}

function enterReviewMode() {
    isInReviewMode = true;
    currentReviewQuestionIndex = 0;
    quizCompleted = true; // Keep this true so options are not clickable by default selectOption logic

    resultContainerElement.style.display = 'none'; // Hide results page
    quizElement.style.display = 'block'; // Show quiz area for review
    quizContainerElement.classList.add('review-mode'); // Add class for specific review styling

    nextButton.style.display = 'none'; // Hide original next button
    questionCounterElement.style.display = 'block'; // Ensure counter is visible
    reviewNavElement.style.display = 'flex'; // Show review navigation

    loadReviewQuestion();
}

function exitReviewMode() {
    isInReviewMode = false;
    quizContainerElement.classList.remove('review-mode');
    reviewNavElement.style.display = 'none'; // Hide review navigation

    // Decide what to show after exiting: results or start screen
    // For now, let's go back to the results screen
    quizElement.style.display = 'none';
    resultContainerElement.style.display = 'block';
    nextButton.style.display = 'inline-block'; // Show original next button if needed later
    // Restore the main quiz next button's correct state (visible if quiz not at end, hidden if it was)
    if (currentQuestion >= questions.length -1 && !isInReviewMode) { // Check if quiz was at its end
        nextButton.style.display = 'none'; // Should be "Ver Resultado" or hidden
    } else {
        nextButton.style.display = 'inline-block';
    }
}

function loadReviewQuestion() {
    const questionData = questions[currentReviewQuestionIndex];
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    questionData.options.forEach((optionString, index) => { // optionItem is now optionString
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = optionString; // Directly set text content

        if (index === questionData.answer) {
            optionElement.classList.add('review-correct');
        }
        if (index === questionData.userAnswer) {
            optionElement.classList.add('review-user-selected');
            if (questionData.userAnswer !== questionData.answer) {
                optionElement.classList.add('review-user-wrong');
            }
        }
        optionsElement.appendChild(optionElement);
    });

    questionCounterElement.textContent = `Revisando Pergunta ${currentReviewQuestionIndex + 1} de ${questions.length}`;
    prevReviewButton.disabled = currentReviewQuestionIndex === 0;
    nextReviewButton.disabled = currentReviewQuestionIndex === questions.length - 1;
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
reviewButton.addEventListener('click', enterReviewMode);
exitReviewButton.addEventListener('click', exitReviewMode);

prevReviewButton.addEventListener('click', () => {
    if (currentReviewQuestionIndex > 0) {
        currentReviewQuestionIndex--;
        loadReviewQuestion();
    }
});

nextReviewButton.addEventListener('click', () => {
    if (currentReviewQuestionIndex < questions.length - 1) {
        currentReviewQuestionIndex++;
        loadReviewQuestion();
    }
});

// Initial setup calls
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    reviewButton.style.display = 'none';
    reviewNavElement.style.display = 'none';
    updateHighScoreDisplay(); // Load and display high score on initial load
});
