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

const selectedIconSVG = '<svg viewBox="0 0 100 100" fill="currentColor" class="icon-selected-dot"><circle cx="50" cy="50" r="40"></circle></svg>';
const correctIconSVG = '<svg viewBox="0 0 100 100" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none" class="icon-correct-tick"><path d="M20 55 L40 75 L80 35"></path></svg>';
const wrongIconSVG = '<svg viewBox="0 0 100 100" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none" class="icon-wrong-cross"><path d="M20 20 L80 80 M20 80 L80 20"></path></svg>';

// Elementos do DOM
// ... (existing elements)
const detailedResultsElement = document.getElementById('detailed-results');
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
const reviewButton = document.getElementById('review-btn');
const reviewNavElement = document.getElementById('review-nav');
const prevReviewButton = document.getElementById('prev-review-btn');
const nextReviewButton = document.getElementById('next-review-btn');
const exitReviewButton = document.getElementById('exit-review-btn');
const quizContainerElement = document.querySelector('.quiz-container');
const highScoreDisplayElement = document.getElementById('high-score-display');

const HIGH_SCORE_KEY = 'quizHighScore';

let activeQuizQuestions = [];
const QUESTIONS_PER_SESSION = 20; // Ensure this is 20

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
    // Now that questions array might be larger than QUESTIONS_PER_SESSION,
    // the high score display should reflect score out of QUESTIONS_PER_SESSION.
    highScoreDisplayElement.textContent = `HighScore: ${highScore}/${QUESTIONS_PER_SESSION}`;
}

// Variáveis do quiz
let isInReviewMode = false;
let currentReviewQuestionIndex = 0;
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let quizCompleted = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setupNewQuizSession() {
    shuffleArray(questions);
    activeQuizQuestions = questions.slice(0, QUESTIONS_PER_SESSION);

    currentQuestion = 0;
    score = 0;
    quizCompleted = false;
    selectedOption = null;

    activeQuizQuestions.forEach(q => {
        q.userAnswer = null;
    });

    if (progressBarElement) progressBarElement.style.width = '0%';
    if (nextButton) {
        nextButton.textContent = 'Próxima Pergunta';
        nextButton.disabled = true;
    }
    if (resultContainerElement) resultContainerElement.style.display = 'none';
    if (quizElement) quizElement.style.display = 'block';
    if (reviewNavElement) reviewNavElement.style.display = 'none';
    if (reviewButton) reviewButton.style.display = 'none';
    if (detailedResultsElement) detailedResultsElement.innerHTML = '<h3>Resumo Detalhado:</h3>';
}

function setOptionIcon(optionElement, iconSVG = '', iconColorClass = '') {
    const iconContainer = optionElement.querySelector('.feedback-icon-container');
    if (iconContainer) {
        iconContainer.innerHTML = iconSVG;
        iconContainer.classList.remove('icon-color-primary', 'icon-color-success', 'icon-color-danger');
        if (iconColorClass) {
            iconContainer.classList.add(iconColorClass);
        }
    }
}

function clearAllOptionIcons() {
    document.querySelectorAll('.option').forEach(optElement => {
        setOptionIcon(optElement);
    });
}

// Carregar questão
function loadQuestion() {
    quizContainerElement.classList.remove('review-mode');
    clearAllOptionIcons();
    quizCompleted = false;

    const questionData = activeQuizQuestions[currentQuestion];
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    // Store the original correct answer's text
    const originalCorrectAnswerText = questionData.options[questionData.answer];

    // Create a copy of the options to shuffle for display
    let ऑप्शन्सफॉरडिस्प्ले = [...questionData.options]; // Using a non-English variable name to avoid collision
    shuffleArray(ऑप्शन्सफॉरडिस्प्ले);
    questionData.displayedOptions = ऑप्शन्सफॉरडिस्प्ले; // ADD THIS LINE

    // Find the new index of the original correct answer in the shuffled list
    questionData.shuffledAnswerIndex = ऑप्शन्सफॉरडिस्प्ले.indexOf(originalCorrectAnswerText);

    ऑप्शन्सफॉरडिस्प्ले.forEach((optionString, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        const textSpan = document.createElement('span');
        textSpan.classList.add('option-text');
        textSpan.textContent = optionString;
        optionElement.appendChild(textSpan);

        const iconContainer = document.createElement('span');
        iconContainer.classList.add('feedback-icon-container');
        optionElement.appendChild(iconContainer);

        optionElement.dataset.index = index; // This index is for the shuffled position
        optionElement.addEventListener('click', selectOption);
        optionElement.style.cursor = 'pointer';
        optionsElement.appendChild(optionElement);
    });

    updateProgress();
    nextButton.style.display = 'inline-block';
    reviewNavElement.style.display = 'none';
    nextButton.textContent = 'Próxima Pergunta';
    nextButton.disabled = true;
    selectedOption = null;
}

// Selecionar opção
function selectOption(e) {
    if (quizCompleted) return;

    const selectedElement = e.target.closest('.option');
    if (!selectedElement) return;

    const optionIndex = parseInt(selectedElement.dataset.index);

    const allOptionElements = document.querySelectorAll('.option');
    allOptionElements.forEach(opt => {
        opt.classList.remove('selected');
        setOptionIcon(opt);
    });

    selectedElement.classList.add('selected');
    setOptionIcon(selectedElement, selectedIconSVG, 'icon-color-primary');

    selectedOption = optionIndex;
    activeQuizQuestions[currentQuestion].userAnswer = optionIndex;
    nextButton.disabled = false;
}

// Verificar resposta
function checkAnswer() {
    const question = activeQuizQuestions[currentQuestion]; // Already gets from activeQuizQuestions
    const allOptionElements = document.querySelectorAll('.option');

    quizCompleted = true;
    nextButton.disabled = false;

    // The 'selectedOption' variable holds the index from the shuffled display.
    // 'question.shuffledAnswerIndex' holds the index of the correct answer IN THE SHUFFLED DISPLAY.
    const isCorrect = (selectedOption === question.shuffledAnswerIndex);

    allOptionElements.forEach((optElement, index) => {
        setOptionIcon(optElement); // Clear any "selected" dot icon

        // Highlight the actual correct option (using shuffledAnswerIndex)
        if (index === question.shuffledAnswerIndex) {
            optElement.classList.add('correct');
            setOptionIcon(optElement, correctIconSVG, 'icon-color-success');
        }

        // Highlight the user's choice
        if (index === selectedOption) {
            if (isCorrect) {
                // 'correct' class and icon already applied if it's the correct one
                // optElement.classList.add('correct'); // Redundant if selectedOption === question.shuffledAnswerIndex
                // setOptionIcon(optElement, correctIconSVG, 'icon-color-success'); // Redundant
            } else {
                optElement.classList.add('wrong');
                setOptionIcon(optElement, wrongIconSVG, 'icon-color-danger');
            }
        }

        optElement.removeEventListener('click', selectOption);
        optElement.style.cursor = 'default';
    });

    if (isCorrect) {
        score++;
    }

    nextButton.textContent = currentQuestion < QUESTIONS_PER_SESSION - 1 ? 'Próxima Pergunta' : 'Ver Resultado';
}

// Próxima questão ou mostrar resultado
function nextQuestion() {
    if (selectedOption === null) return;

    checkAnswer();

    if (currentQuestion < QUESTIONS_PER_SESSION - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

// Atualizar progresso
function updateProgress() {
    const progress = ((currentQuestion + 1) / QUESTIONS_PER_SESSION) * 100;
    progressBarElement.style.width = `${progress}%`;
    questionCounterElement.textContent = `Pergunta ${currentQuestion + 1} de ${QUESTIONS_PER_SESSION}`;
}

// Mostrar resultado
function showResult() {
    quizElement.style.display = 'none';
    resultContainerElement.style.display = 'block';
    resultScoreElement.textContent = `${score}/${QUESTIONS_PER_SESSION}`;

    const percentage = (score / QUESTIONS_PER_SESSION) * 100;
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
    quizCompleted = true;
    reviewButton.style.display = 'inline-block';

    const currentHighScore = getHighScore();
    if (score > currentHighScore) {
        setHighScore(score);
        updateHighScoreDisplay();
        resultMessageElement.textContent += " Parabéns, novo recorde!";
    }

    detailedResultsElement.innerHTML = '<h3>Resumo Detalhado:</h3>';
    activeQuizQuestions.forEach((q, index) => { // q is an object from activeQuizQuestions
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const questionText = document.createElement('p'); // Ensure this variable name is consistent
        questionText.classList.add('question-text');
        questionText.textContent = `P${index + 1}: ${q.question}`;

        const userAnswerTextP = document.createElement('p');
        userAnswerTextP.classList.add('user-answer');

        // CORRECTED: Use q.displayedOptions to get the text of the answer the user saw and selected.
        // q.userAnswer is the index into q.displayedOptions.
        const userAnswerDisplay = (q.userAnswer !== null && q.displayedOptions && q.displayedOptions[q.userAnswer] !== undefined)
                                  ? q.displayedOptions[q.userAnswer]
                                  : "Não respondida";

        // The class for styling ('correct' or 'wrong') should be based on whether
        // the user's selection index matched the shuffled correct answer index.
        const userWasCorrect = (q.userAnswer === q.shuffledAnswerIndex);
        userAnswerTextP.innerHTML = `Sua resposta: <span class="${userWasCorrect ? 'correct' : 'wrong'}">${userAnswerDisplay}</span>`;

        if (q.userAnswer === null) {
            const spanElement = userAnswerTextP.querySelector('span');
            if(spanElement) {
                 spanElement.classList.remove('correct', 'wrong');
            }
        }

        const correctAnswerTextP = document.createElement('p');
        // The actual correct answer text comes from the original options array using the original answer index.
        const correctAnswerDisplay = q.options[q.answer];
        correctAnswerTextP.innerHTML = `Resposta correta: <span class="correct-answer">${correctAnswerDisplay}</span>`;

        resultItem.appendChild(questionText);
        resultItem.appendChild(userAnswerTextP);
        resultItem.appendChild(correctAnswerTextP);
        detailedResultsElement.appendChild(resultItem);
    });
}

// Reiniciar quiz
function restartQuiz() {
    if (isInReviewMode) {
        exitReviewMode();
    }
    setupNewQuizSession();
    loadQuestion();
}

function enterReviewMode() {
    isInReviewMode = true;
    currentReviewQuestionIndex = 0;
    quizCompleted = true;

    resultContainerElement.style.display = 'none';
    quizElement.style.display = 'block';
    quizContainerElement.classList.add('review-mode');

    nextButton.style.display = 'none';
    questionCounterElement.style.display = 'block';
    reviewNavElement.style.display = 'flex';

    loadReviewQuestion();
}

function exitReviewMode() {
    isInReviewMode = false;
    quizContainerElement.classList.remove('review-mode');
    reviewNavElement.style.display = 'none';

    quizElement.style.display = 'none';
    resultContainerElement.style.display = 'block';
    nextButton.style.display = 'inline-block';

    if (currentQuestion >= QUESTIONS_PER_SESSION -1 && !isInReviewMode) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'inline-block';
    }
}

function loadReviewQuestion() {
    quizContainerElement.classList.add('review-mode');
    const questionData = activeQuizQuestions[currentReviewQuestionIndex];
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    // Get the text of the option the user actually selected during the quiz.
    // questionData.userAnswer is the index from the shuffled 'displayedOptions'.
    const userSelectedOptionText = (questionData.userAnswer !== null && questionData.displayedOptions)
                                   ? questionData.displayedOptions[questionData.userAnswer]
                                   : null;

    // Iterate over the ORIGINAL options for display
    questionData.options.forEach((optionString, originalIndex) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.style.cursor = 'default';

        const textSpan = document.createElement('span');
        textSpan.classList.add('option-text');
        textSpan.textContent = optionString;
        optionElement.appendChild(textSpan);

        const iconContainer = document.createElement('span');
        iconContainer.classList.add('feedback-icon-container');
        optionElement.appendChild(iconContainer);

        setOptionIcon(optionElement); // Clear any previous icon

        // Is this current original option the actual correct answer?
        // Use questionData.answer (index for original options array)
        if (originalIndex === questionData.answer) {
            optionElement.classList.add('review-correct'); // Background color
            setOptionIcon(optionElement, correctIconSVG, 'icon-color-success'); // Correct icon
        }

        // Was this current original option (by its text) the one the user selected?
        if (userSelectedOptionText !== null && optionString === userSelectedOptionText) {
            optionElement.classList.add('review-user-selected'); // Border/emphasis

            // If the user's selected text is not the text of the actual correct answer
            if (userSelectedOptionText !== questionData.options[questionData.answer]) {
                optionElement.classList.add('review-user-wrong'); // Background color for user's wrong choice
                // Add wrong icon only if it's not the already marked correct one (this check is important)
                if (originalIndex !== questionData.answer) {
                    setOptionIcon(optionElement, wrongIconSVG, 'icon-color-danger');
                }
            }
            // If userSelectedOptionText IS the correct answer's text,
            // the 'review-correct' class and correct icon are already set from the block above.
        }
        optionsElement.appendChild(optionElement);
    });

    questionCounterElement.textContent = `Revisando Pergunta ${currentReviewQuestionIndex + 1} de ${QUESTIONS_PER_SESSION}`;
    prevReviewButton.disabled = currentReviewQuestionIndex === 0;
    nextReviewButton.disabled = currentReviewQuestionIndex === QUESTIONS_PER_SESSION - 1;
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
    if (currentReviewQuestionIndex < QUESTIONS_PER_SESSION - 1) {
        currentReviewQuestionIndex++;
        loadReviewQuestion();
    }
});

// Initial setup calls
document.addEventListener('DOMContentLoaded', () => {
    setupNewQuizSession();
    loadQuestion();

    updateHighScoreDisplay();
    if (reviewButton) reviewButton.style.display = 'none';
    if (reviewNavElement) reviewNavElement.style.display = 'none';
});
