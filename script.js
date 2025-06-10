// At the top, near 'questions' array definition
const IMAGE_BASE_PATH = 'images/options/'; // Define if all option images are in a subfolder

// Modify the 'questions' array:
// Each option string becomes an object: { text: "Option Text", image: "image_name.svg" or null }

const questions = [
    {
        question: "Qual componente é considerado o 'cérebro' do computador?",
        options: [
            { text: "Placa de vídeo", image: "gpu_icon.svg" },
            { text: "Processador (CPU)", image: "cpu_icon.svg" },
            { text: "Memória RAM", image: "ram_icon.svg" },
            { text: "Disco rígido (HD)", image: "hdd_icon.svg" }
        ],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual programa é usado para criar planilhas?",
        options: [
            { text: "Word", image: "document_icon.svg" },
            { text: "PowerPoint", image: "presentation_icon.svg" },
            { text: "Excel", image: "spreadsheet_icon.svg" },
            { text: "Photoshop", image: "image_editor_icon.svg" }
        ],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que significa a sigla 'PDF'?",
        options: [
            { text: "Portable Document Format", image: "pdf_icon.svg" },
            { text: "Personal Data File", image: null },
            { text: "Printable Document Form", image: null },
            { text: "Public Digital File", image: null }
        ],
        answer: 0,
        userAnswer: null
    },
    {
        question: "Qual sistema operacional é desenvolvido pela Microsoft?",
        options: [
            { text: "macOS", image: "os_mac_icon.svg" },
            { text: "Linux", image: "os_linux_icon.svg" },
            { text: "Windows", image: "os_windows_icon.svg" },
            { text: "Android", image: "os_android_icon.svg" }
        ],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é um 'browser'?",
        options: [
            { text: "Um programa para editar textos", image: "document_icon.svg" },
            { text: "Um navegador de internet", image: "browser_icon.svg" },
            { text: "Um antivírus", image: "virus_icon.svg" }, // Added virus icon for consistency
            { text: "Um sistema operacional", image: "os_windows_icon.svg" } // Generic OS icon
        ],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual tecla de atalho é usada para copiar um texto?",
        options: [
            { text: "Ctrl + X", image: "cut_icon.svg" },
            { text: "Ctrl + C", image: "copy_icon.svg" },
            { text: "Ctrl + V", image: "paste_icon.svg" },
            { text: "Ctrl + Z", image: "undo_icon.svg" }
        ],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual desses NÃO é um dispositivo de armazenamento?",
        options: [
            { text: "Pen Drive", image: "pendrive_icon.svg" },
            { text: "SSD", image: "ssd_icon.svg" },
            { text: "Monitor", image: "monitor_icon.svg" }, // This is the correct answer and should be visual
            { text: "HD Externo", image: "external_hdd_icon.svg" }
        ],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é um 'email'?",
        options: [
            { text: "Um tipo de rede social", image: "chat_icon.svg" }, // Generic social icon
            { text: "Uma mensagem eletrônica", image: "email_icon.svg" },
            { text: "Um programa de edição de vídeo", image: "image_editor_icon.svg" }, // Placeholder
            { text: "Um sistema operacional", image: "os_windows_icon.svg" } // Placeholder
        ],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual desses é um exemplo de sistema operacional livre (open source)?",
        options: [
            { text: "Windows 10", image: "os_windows_icon.svg" },
            { text: "macOS", image: "os_mac_icon.svg" },
            { text: "Linux", image: "os_linux_icon.svg" },
            { text: "iOS", image: "os_android_icon.svg" } // Placeholder for mobile OS
        ],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é 'Wi-Fi'?",
        options: [
            { text: "Um tipo de cabo de internet", image: null }, // Placeholder, maybe a cable icon
            { text: "Uma tecnologia de rede sem fio", image: "wifi_icon.svg" },
            { text: "Um navegador de internet", image: "browser_icon.svg" },
            { text: "Um sistema de armazenamento", image: "hdd_icon.svg" } // Placeholder
        ],
        answer: 1,
        userAnswer: null
    },
        {
        question: "Qual programa é usado para criar apresentações?",
        options: [
            { text: "Word", image: "document_icon.svg" },
            { text: "Excel", image: "spreadsheet_icon.svg" },
            { text: "PowerPoint", image: "presentation_icon.svg" },
            { text: "Notepad", image: null } // Or a simple text file icon
        ],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que significa 'HTTP'?",
        options: [
            { text: "HyperText Transfer Protocol", image: "http_icon.svg" },
            { text: "High Tech Text Processor", image: null },
            { text: "Home Tool Transfer Program", image: null },
            { text: "Hyper Transfer Text Protocol", image: null }
        ],
        answer: 0,
        userAnswer: null
    },
    {
        question: "Qual tecla é usada para dar espaço entre palavras?",
        options: [
            { text: "Enter", image: "enter_key_icon.svg" },
            { text: "Shift", image: "shift_key_icon.svg" },
            { text: "Tab", image: "tab_key_icon.svg" },
            { text: "Barra de Espaço", image: "spacebar_icon.svg" }
        ],
        answer: 3,
        userAnswer: null
    },
    {
        question: "O que é um 'vírus de computador'?",
        options: [
            { text: "Um programa útil", image: null }, // Maybe a checkmark icon?
            { text: "Um hardware especial", image: "cpu_icon.svg" }, // Placeholder
            { text: "Um software malicioso", image: "virus_icon.svg" },
            { text: "Um tipo de navegador", image: "browser_icon.svg" }
        ],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Qual desses NÃO é um serviço de e-mail?",
        options: [
            { text: "Gmail", image: "email_service_icon.svg" },
            { text: "Outlook", image: "email_service_icon.svg" }, // Reusing generic email
            { text: "WhatsApp", image: "chat_icon.svg" },
            { text: "Yahoo Mail", image: "email_service_icon.svg" } // Reusing generic email
        ],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que o ícone da 'lixeira' representa?",
        options: [
            { text: "Local de arquivos excluídos", image: "trashcan_icon.svg" },
            { text: "Pasta de documentos", image: "document_icon.svg" }, // Placeholder
            { text: "Disco rígido", image: "hdd_icon.svg" },
            { text: "Área de trabalho", image: "monitor_icon.svg" } // Placeholder
        ],
        answer: 0,
        userAnswer: null
    },
    {
        question: "Qual comando desfaz a última ação no computador?",
        options: [
            { text: "Ctrl + Y", image: null }, // Redo icon (opposite of undo)
            { text: "Ctrl + Z", image: "undo_icon.svg" },
            { text: "Ctrl + X", image: "cut_icon.svg" },
            { text: "Ctrl + C", image: "copy_icon.svg" }
        ],
        answer: 1,
        userAnswer: null
    },
    {
        question: "O que é um 'backup'?",
        options: [
            { text: "Um tipo de vírus", image: "virus_icon.svg" },
            { text: "Uma cópia de segurança de dados", image: "backup_icon.svg" },
            { text: "Um programa de edição de texto", image: "document_icon.svg" },
            { text: "Um navegador de internet", image: "browser_icon.svg" }
        ],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual desses é um componente de hardware?",
        options: [
            { text: "Windows", image: "os_windows_icon.svg" },
            { text: "Google Chrome", image: "browser_icon.svg" }, // Placeholder for Chrome
            { text: "Memória RAM", image: "ram_icon.svg" },
            { text: "Word", image: "document_icon.svg" }
        ],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que significa 'URL'?",
        options: [
            { text: "Universal Resource Locator", image: null },
            { text: "Uniform Resource Locator", image: "url_icon.svg" },
            { text: "Unique Resource Locator", image: null },
            { text: "United Resource Locator", image: null }
        ],
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
    quizContainerElement.classList.remove('review-mode');
    const questionData = questions[currentQuestion]; // Renamed for clarity
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    questionData.options.forEach((optionItem, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        if (optionItem.image) {
            const img = document.createElement('img');
            img.src = IMAGE_BASE_PATH + optionItem.image;
            img.alt = optionItem.text; // Alt text for accessibility
            img.classList.add('option-image');
            optionElement.appendChild(img);
        }

        const textSpan = document.createElement('span');
        textSpan.textContent = optionItem.text;
        textSpan.classList.add('option-text');
        optionElement.appendChild(textSpan);

        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsElement.appendChild(optionElement);
    });

    updateProgress();
    nextButton.style.display = 'inline-block'; // Ensure quiz next button is visible
    reviewNavElement.style.display = 'none'; // Ensure review nav is hidden
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
        // Ensure userAnswer is not null and options array is accessed correctly
        const userAnswerDisplay = q.userAnswer !== null && q.options[q.userAnswer] ? q.options[q.userAnswer].text : "Não respondida";
        userAnswerTextP.innerHTML = `Sua resposta: <span class="${q.userAnswer === q.answer ? 'correct' : 'wrong'}">${userAnswerDisplay}</span>`;
        if (q.userAnswer === null) {
            userAnswerTextP.querySelector('span').classList.remove('correct', 'wrong');
        }

        const correctAnswerTextP = document.createElement('p');
        // Ensure answer index is valid and options array is accessed correctly
        const correctAnswerDisplay = q.options[q.answer] ? q.options[q.answer].text : "N/A";
        correctAnswerTextP.innerHTML = `Resposta correta: <span class="correct-answer">${correctAnswerDisplay}</span>`;

        resultItem.appendChild(questionTextP);
        resultItem.appendChild(userAnswerTextP);
        resultItem.appendChild(correctAnswerTextP); // Corrected variable name
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
    const questionData = questions[currentReviewQuestionIndex]; // Renamed for clarity
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    questionData.options.forEach((optionItem, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        if (optionItem.image) {
            const img = document.createElement('img');
            img.src = IMAGE_BASE_PATH + optionItem.image;
            img.alt = optionItem.text;
            img.classList.add('option-image');
            optionElement.appendChild(img);
        }

        const textSpan = document.createElement('span');
        textSpan.textContent = optionItem.text;
        textSpan.classList.add('option-text');
        optionElement.appendChild(textSpan);

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
