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
    },
    {
        question: "Qual componente é o 'cérebro' do PC? (Alt)",
        options: ["Placa de vídeo (Alt)", "Processador CPU (Alt)", "Memória RAM (Alt)", "Disco rígido HD (Alt)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual programa é para planilhas? (Alt)",
        options: ["Editor de Texto (Alt)", "Software de Apresentação (Alt)", "Editor de Planilhas (Alt)", "Editor de Imagem (Alt)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Significado de PDF (Alt)",
        options: ["Formato de Documento Portátil (Alt)", "Arquivo de Dados Pessoais (Alt)", "Formulário de Documento Imprimível (Alt)", "Arquivo Digital Público (Alt)"],
        answer: 0,
        userAnswer: null
    },
    {
        question: "SO da Microsoft (Alt)",
        options: ["macOS (Alt)", "Linux (Alt)", "Windows (Alt)", "Android (Alt)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Definição de 'browser' (Alt)",
        options: ["Editor de textos (Alt)", "Navegador web (Alt)", "Antivírus (Alt)", "Sistema Operacional (Alt)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Atalho para copiar (Alt)",
        options: ["Ctrl + X (Alt)", "Ctrl + C (Alt)", "Ctrl + V (Alt)", "Ctrl + Z (Alt)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual NÃO é armazenamento? (Alt)",
        options: ["Pen Drive (Alt)", "SSD (Alt)", "Monitor (Alt)", "HD Externo (Alt)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Definição de 'email' (Alt)",
        options: ["Rede social (Alt)", "Mensagem eletrônica (Alt)", "Editor de vídeo (Alt)", "SO (Alt)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "SO livre (open source)? (Alt)",
        options: ["Windows (Alt)", "macOS (Alt)", "Linux (Alt)", "iOS (Alt)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Definição de 'Wi-Fi' (Alt)",
        options: ["Cabo de internet (Alt)", "Rede sem fio (Alt)", "Navegador (Alt)", "Armazenamento (Alt)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual componente é o 'cérebro' do computador? (Rev)",
        options: ["GPU (Rev)", "CPU (Rev)", "RAM (Rev)", "HDD (Rev)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual programa é usado para criar planilhas? (Rev)",
        options: ["Processador de Texto (Rev)", "Slides (Rev)", "Software de Planilha (Rev)", "Editor Gráfico (Rev)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que significa a sigla 'PDF'? (Rev)",
        options: ["Portable Document Format (Rev)", "Personal Data File (Rev)", "Printable Document Form (Rev)", "Public Digital File (Rev)"],
        answer: 0,
        userAnswer: null
    },
    {
        question: "Qual sistema operacional é desenvolvido pela Microsoft? (Rev)",
        options: ["Apple macOS (Rev)", "Distribuição Linux (Rev)", "Microsoft Windows (Rev)", "Google Android (Rev)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é um 'browser'? (Rev)",
        options: ["Criador de Documentos (Rev)", "Visualizador da Web (Rev)", "Protetor de Vírus (Rev)", "Interface do Usuário (Rev)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual tecla de atalho é usada para copiar um texto? (Rev)",
        options: ["Recortar (Rev)", "Copiar (Rev)", "Colar (Rev)", "Desfazer (Rev)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual desses NÃO é um dispositivo de armazenamento? (Rev)",
        options: ["Unidade Flash (Rev)", "Unidade de Estado Sólido (Rev)", "Tela (Rev)", "Disco Portátil (Rev)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é um 'email'? (Rev)",
        options: ["Plataforma Social (Rev)", "Correspondência Digital (Rev)", "Software de Edição (Rev)", "Ambiente Operacional (Rev)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual desses é um exemplo de sistema operacional livre (open source)? (Rev)",
        options: ["Windows OS (Rev)", "Mac OS (Rev)", "Linux Kernel (Rev)", "iOS Mobile (Rev)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "O que é 'Wi-Fi'? (Rev)",
        options: ["Conexão por Fio (Rev)", "Tecnologia Wireless (Rev)", "Aplicativo de Navegação (Rev)", "Dispositivo de Backup (Rev)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual componente é o 'cérebro' do computador? (V3)",
        options: ["Vídeo Card (V3)", "Processador Central (V3)", "Memória de Acesso Aleatório (V3)", "Drive de Disco Rígido (V3)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual programa é para criar planilhas? (V3)",
        options: ["MS Word (V3)", "MS PowerPoint (V3)", "MS Excel (V3)", "Adobe Photoshop (V3)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Significado de PDF (V3)",
        options: ["Formato Portátil de Documento (V3)", "Ficheiro Pessoal de Dados (V3)", "Formulário Imprimível de Documento (V3)", "Ficheiro Público Digital (V3)"],
        answer: 0,
        userAnswer: null
    },
    {
        question: "SO da Microsoft (V3)",
        options: ["macOS (V3)", "Ubuntu (V3)", "Windows (V3)", "Android (V3)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Definição de 'browser' (V3)",
        options: ["App de Texto (V3)", "Navegador de Internet (V3)", "Software Antivírus (V3)", "Gerenciador de Sistema (V3)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Atalho para copiar (V3)",
        options: ["Control+X (V3)", "Control+C (V3)", "Control+V (V3)", "Control+Z (V3)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "Qual NÃO é armazenamento? (V3)",
        options: ["Flash Drive (V3)", "Solid State Drive (V3)", "Display (V3)", "External Drive (V3)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Definição de 'email' (V3)",
        options: ["App de Mídia Social (V3)", "Mensageria Eletrônica (V3)", "App de Edição de Vídeo (V3)", "Plataforma de Sistema (V3)"],
        answer: 1,
        userAnswer: null
    },
    {
        question: "SO livre (open source)? (V3)",
        options: ["Windows 11 (V3)", "macOS Ventura (V3)", "Linux Mint (V3)", "iOS 16 (V3)"],
        answer: 2,
        userAnswer: null
    },
    {
        question: "Definição de 'Wi-Fi' (V3)",
        options: ["Cabo Ethernet (V3)", "Comunicação Sem Fio (V3)", "Cliente Web (V3)", "Unidade de Armazenamento (V3)"],
        answer: 1,
        userAnswer: null
    }
];

const selectedIconSVG = '<svg viewBox="0 0 100 100" fill="currentColor" class="icon-selected-dot"><circle cx="50" cy="50" r="40"></circle></svg>';
const correctIconSVG = '<svg viewBox="0 0 100 100" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none" class="icon-correct-tick"><path d="M20 55 L40 75 L80 35"></path></svg>';
const wrongIconSVG = '<svg viewBox="0 0 100 100" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none" class="icon-wrong-cross"><path d="M20 20 L80 80 M20 80 L80 20"></path></svg>';

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

let activeQuizQuestions = [];
const QUESTIONS_PER_SESSION = 20; // Define how many questions per quiz

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
    highScoreDisplayElement.textContent = `HighScore: ${highScore}/${QUESTIONS_PER_SESSION}`; // Use QUESTIONS_PER_SESSION
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
        [array[i], array[j]] = [array[j], array[i]]; // ES6 swap
    }
}

function setupNewQuizSession() {
    // Shuffle a copy of the main questions bank to avoid altering the original order permanently
    // if ever needed, or shuffle original if order persistence isn't a concern.
    // For simplicity, let's shuffle the main 'questions' array directly.
    // If 'questions' should remain pristine, make a copy first:
    // const shuffledBank = [...questions];
    // shuffleArray(shuffledBank);
    // activeQuizQuestions = shuffledBank.slice(0, QUESTIONS_PER_SESSION);

    shuffleArray(questions); // Shuffles the main bank in place
    activeQuizQuestions = questions.slice(0, QUESTIONS_PER_SESSION);

    currentQuestion = 0;
    score = 0;
    quizCompleted = false; // Ensure quiz is not marked completed globally at start
    selectedOption = null;

    // Reset userAnswer for the active quiz questions
    activeQuizQuestions.forEach(q => {
        q.userAnswer = null;
    });

    // Any other UI resets needed at the very start of a new session
    if (progressBarElement) progressBarElement.style.width = '0%';
    if (nextButton) {
        nextButton.textContent = 'Próxima Pergunta';
        nextButton.disabled = true;
    }
    if (resultContainerElement) resultContainerElement.style.display = 'none';
    if (quizElement) quizElement.style.display = 'block'; // Ensure quiz area is visible
    if (reviewNavElement) reviewNavElement.style.display = 'none';
    if (reviewButton) reviewButton.style.display = 'none';
    if (detailedResultsElement) detailedResultsElement.innerHTML = '<h3>Resumo Detalhado:</h3>';
}

function setOptionIcon(optionElement, iconSVG = '', iconColorClass = '') {
    const iconContainer = optionElement.querySelector('.feedback-icon-container');
    if (iconContainer) {
        iconContainer.innerHTML = iconSVG;
        // Reset color classes
        iconContainer.classList.remove('icon-color-primary', 'icon-color-success', 'icon-color-danger');
        if (iconColorClass) {
            iconContainer.classList.add(iconColorClass);
        }
    }
}

function clearAllOptionIcons() {
    document.querySelectorAll('.option').forEach(optElement => {
        setOptionIcon(optElement); // Clear icon and color class
    });
}

// Carregar questão
function loadQuestion() {
    quizContainerElement.classList.remove('review-mode');
    clearAllOptionIcons(); // Clear icons from previous question
    quizCompleted = false; // Reset for the new question

    const questionData = activeQuizQuestions[currentQuestion]; // Use activeQuizQuestions
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    questionData.options.forEach((optionString, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        const textSpan = document.createElement('span');
        textSpan.classList.add('option-text');
        textSpan.textContent = optionString;
        optionElement.appendChild(textSpan);

        const iconContainer = document.createElement('span');
        iconContainer.classList.add('feedback-icon-container');
        optionElement.appendChild(iconContainer);

        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption); // Ensure listener is present
        optionElement.style.cursor = 'pointer'; // Ensure cursor is pointer
        optionsElement.appendChild(optionElement); // Append the fully constructed optionElement here
    });

    updateProgress();
    nextButton.style.display = 'inline-block';
    reviewNavElement.style.display = 'none';
    nextButton.textContent = 'Próxima Pergunta'; // Reset button text from "Ver Resultado"
    nextButton.disabled = true;
    selectedOption = null;
}

// Selecionar opção
function selectOption(e) {
    if (quizCompleted) return; // Don't allow selection if quiz/question is 'done'

    const selectedElement = e.target.closest('.option'); // Ensure we get the .option div
    if (!selectedElement) return; // Click was not on an option or its child

    const optionIndex = parseInt(selectedElement.dataset.index);

    // Clear previous visual selections and icons
    const allOptionElements = document.querySelectorAll('.option');
    allOptionElements.forEach(opt => {
        opt.classList.remove('selected');
        setOptionIcon(opt); // Clear icon and its specific color
    });

    // Mark new selection
    selectedElement.classList.add('selected');
    setOptionIcon(selectedElement, selectedIconSVG, 'icon-color-primary'); // Show selected icon with primary color

    selectedOption = optionIndex;
    activeQuizQuestions[currentQuestion].userAnswer = optionIndex; // Use activeQuizQuestions
    nextButton.disabled = false;
}

// Verificar resposta
function checkAnswer() {
    const question = activeQuizQuestions[currentQuestion]; // Use activeQuizQuestions
    const allOptionElements = document.querySelectorAll('.option'); // Get all option elements
    // const selectedOptionElement = allOptionElements[selectedOption]; // User's chosen option element - Not strictly needed with current logic
    // const correctOptionElement = allOptionElements[question.answer]; // Actual correct option element - Not strictly needed

    quizCompleted = true; // Mark question as 'answered' to prevent re-selection
    nextButton.disabled = false; // Enable next button

    // Update classes and icons
    allOptionElements.forEach((optElement, index) => {
        // Clear any neutral "selected" icon first before applying final correct/wrong
        setOptionIcon(optElement); // Clears current icon (like the selected dot)

        if (index === question.answer) { // This is the correct answer
            optElement.classList.add('correct');
            // Always show correct icon on the correct answer, even if not selected by user
            setOptionIcon(optElement, correctIconSVG, 'icon-color-success');
        }

        if (index === selectedOption) { // This is what the user picked
            if (selectedOption === question.answer) {
                // Already handled by above block, class 'correct' is added
                // Icon is already set to correctIconSVG
            } else {
                optElement.classList.add('wrong');
                setOptionIcon(optElement, wrongIconSVG, 'icon-color-danger');
            }
        }
        // Make options non-interactive after answer is revealed for this question
        optElement.removeEventListener('click', selectOption);
        optElement.style.cursor = 'default';
    });

    if (selectedOption === question.answer) {
        score++;
    }

    nextButton.textContent = currentQuestion < QUESTIONS_PER_SESSION - 1 ? 'Próxima Pergunta' : 'Ver Resultado'; // Use QUESTIONS_PER_SESSION
}

// Próxima questão ou mostrar resultado
function nextQuestion() {
    if (selectedOption === null) return;

    checkAnswer();

    if (currentQuestion < QUESTIONS_PER_SESSION - 1) { // Use QUESTIONS_PER_SESSION
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

// Atualizar progresso
function updateProgress() {
    const progress = ((currentQuestion + 1) / QUESTIONS_PER_SESSION) * 100; // Use QUESTIONS_PER_SESSION
    progressBarElement.style.width = `${progress}%`;
    questionCounterElement.textContent = `Pergunta ${currentQuestion + 1} de ${QUESTIONS_PER_SESSION}`; // Use QUESTIONS_PER_SESSION
}

// Mostrar resultado
function showResult() {
    quizElement.style.display = 'none';
    resultContainerElement.style.display = 'block';
    resultScoreElement.textContent = `${score}/${QUESTIONS_PER_SESSION}`; // Use QUESTIONS_PER_SESSION

    const percentage = (score / QUESTIONS_PER_SESSION) * 100; // Use QUESTIONS_PER_SESSION
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
    activeQuizQuestions.forEach((q, index) => { // Use activeQuizQuestions
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
    if (isInReviewMode) { // Check if in review mode before calling exitReviewMode
        exitReviewMode();
    }
    setupNewQuizSession(); // Setup a new randomized set of 20 questions and reset states
    loadQuestion();        // Load the first question of the new session

    // updateHighScoreDisplay(); // Not strictly needed here as it doesn't change on restart, only on load or new high score
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
    quizContainerElement.classList.add('review-mode'); // Ensure review mode class is on
    // clearAllOptionIcons(); // Optional: Clear all icons upfront if needed, though setOptionIcon below will overwrite

    const questionData = activeQuizQuestions[currentReviewQuestionIndex]; // Use activeQuizQuestions
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = ''; // Clear previous options

    questionData.options.forEach((optionString, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        // Make options non-interactive in review mode by default
        optionElement.style.cursor = 'default';
        // No event listener for selection needed here

        const textSpan = document.createElement('span');
        textSpan.classList.add('option-text');
        textSpan.textContent = optionString;
        optionElement.appendChild(textSpan);

        const iconContainer = document.createElement('span');
        iconContainer.classList.add('feedback-icon-container');
        optionElement.appendChild(iconContainer);

        // Initial state: clear any icon from previous rendering of this option slot
        setOptionIcon(optionElement);

        // Style for the actual correct answer
        if (index === questionData.answer) {
            optionElement.classList.add('review-correct'); // Existing class for background
            setOptionIcon(optionElement, correctIconSVG, 'icon-color-success');
        }

        // Style for the user's answer
        if (index === questionData.userAnswer) {
            optionElement.classList.add('review-user-selected'); // Existing class for potential border/emphasis

            if (questionData.userAnswer !== questionData.answer) {
                optionElement.classList.add('review-user-wrong'); // Existing class for background
                // If user was wrong, their selection gets the wrong icon.
                // If it was also the correct answer (which is impossible if wrong),
                // the correctIconSVG would have taken precedence or caused conflict.
                // So, this is fine.
                setOptionIcon(optionElement, wrongIconSVG, 'icon-color-danger');
            }
            // If userAnswer IS the correct answer, the correctIconSVG is already set by the block above.
        }

        optionsElement.appendChild(optionElement);
    });

    questionCounterElement.textContent = `Revisando Pergunta ${currentReviewQuestionIndex + 1} de ${QUESTIONS_PER_SESSION}`; // Use QUESTIONS_PER_SESSION
    prevReviewButton.disabled = currentReviewQuestionIndex === 0;
    nextReviewButton.disabled = currentReviewQuestionIndex === QUESTIONS_PER_SESSION - 1; // Use QUESTIONS_PER_SESSION
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
    setupNewQuizSession(); // Setup the randomized 20 questions
    loadQuestion();        // Load the first question of the new session

    updateHighScoreDisplay();
    if (reviewButton) reviewButton.style.display = 'none';
    if (reviewNavElement) reviewNavElement.style.display = 'none';
});
