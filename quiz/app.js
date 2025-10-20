// Application State
let currentQuiz = {
    questions: [],
    currentIndex: 0,
    userAnswers: [],
    startTime: null,
    timerInterval: null,
    rangeStart: 1,
    rangeEnd: 20
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcomeScreen'),
    quiz: document.getElementById('quizScreen'),
    results: document.getElementById('resultsScreen'),
    review: document.getElementById('reviewScreen'),
    history: document.getElementById('historyScreen')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    loadHistory();
    setupEventListeners();
    validateRangeInputs();
});

// Event Listeners
function setupEventListeners() {
    // Welcome Screen
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
    document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
    document.getElementById('showAllHistoryBtn').addEventListener('click', () => showScreen('history'));
    
    // Quiz Screen
    document.getElementById('resetBtn').addEventListener('click', resetQuiz);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    
    // Results Screen
    document.getElementById('reviewBtn').addEventListener('click', showReview);
    document.getElementById('newQuizBtn').addEventListener('click', () => {
        resetQuiz();
        showScreen('welcome');
    });
    
    // Review Screen
    document.getElementById('backToResultsBtn').addEventListener('click', () => showScreen('results'));
    
    // History Screen
    document.getElementById('backToWelcomeBtn').addEventListener('click', () => showScreen('welcome'));
    
    // Range inputs validation
    document.getElementById('rangeStart').addEventListener('input', validateRangeInputs);
    document.getElementById('rangeEnd').addEventListener('input', validateRangeInputs);
}

// Validate Range Inputs
function validateRangeInputs() {
    const startInput = document.getElementById('rangeStart');
    const endInput = document.getElementById('rangeEnd');
    
    let start = parseInt(startInput.value) || 1;
    let end = parseInt(endInput.value) || 681;
    
    // Ensure within bounds
    start = Math.max(1, Math.min(681, start));
    end = Math.max(1, Math.min(681, end));
    
    // Ensure start <= end
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    
    startInput.value = start;
    endInput.value = end;
}

// Screen Management
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Start Quiz
function startQuiz() {
    validateRangeInputs();
    
    const start = parseInt(document.getElementById('rangeStart').value);
    const end = parseInt(document.getElementById('rangeEnd').value);
    
    currentQuiz.rangeStart = start;
    currentQuiz.rangeEnd = end;
    
    // Filter questions by range and shuffle
    const filteredQuestions = QUESTIONS.filter(q => q.id >= start && q.id <= end);
    currentQuiz.questions = shuffleArray([...filteredQuestions]);
    
    // Shuffle answers for each question
    currentQuiz.questions = currentQuiz.questions.map(q => {
        const shuffledAnswers = shuffleArrayWithIndex(q.answers, q.correctAnswer);
        return {
            ...q,
            originalAnswers: [...q.answers],
            answers: shuffledAnswers.array,
            correctAnswer: shuffledAnswers.newIndex
        };
    });
    
    currentQuiz.currentIndex = 0;
    currentQuiz.userAnswers = [];
    currentQuiz.startTime = Date.now();
    
    startTimer();
    showScreen('quiz');
    displayQuestion();
}

// Shuffle Array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Shuffle Array and Track Index
function shuffleArrayWithIndex(array, correctIndex) {
    const indices = array.map((_, i) => i);
    const shuffled = [];
    let newCorrectIndex = -1;
    
    while (indices.length > 0) {
        const randomIdx = Math.floor(Math.random() * indices.length);
        const originalIdx = indices[randomIdx];
        shuffled.push(array[originalIdx]);
        
        if (originalIdx === correctIndex) {
            newCorrectIndex = shuffled.length - 1;
        }
        
        indices.splice(randomIdx, 1);
    }
    
    return {
        array: shuffled,
        newIndex: newCorrectIndex
    };
}

// Timer
function startTimer() {
    if (currentQuiz.timerInterval) {
        clearInterval(currentQuiz.timerInterval);
    }
    
    currentQuiz.timerInterval = setInterval(() => {
        const elapsed = Date.now() - currentQuiz.startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        document.getElementById('timer').textContent = 
            `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    if (currentQuiz.timerInterval) {
        clearInterval(currentQuiz.timerInterval);
        currentQuiz.timerInterval = null;
    }
}

// Display Question
function displayQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    const totalQuestions = currentQuiz.questions.length;
    
    // Update counter
    document.getElementById('questionCounter').textContent = 
        `${currentQuiz.currentIndex + 1}/${totalQuestions}`;
    
    // Update question text
    document.getElementById('questionText').textContent = question.question;
    
    // Create answer buttons
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
    
    // Hide next button
    document.getElementById('nextBtn').style.display = 'none';
}

// Select Answer
function selectAnswer(selectedIndex) {
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    buttons.forEach((btn, idx) => {
        btn.classList.add('disabled');
        if (idx === selectedIndex) {
            btn.classList.add('selected');
        }
    });
    
    // Store answer
    currentQuiz.userAnswers[currentQuiz.currentIndex] = {
        questionId: question.id,
        question: question.question,
        userAnswer: selectedIndex,
        correctAnswer: question.correctAnswer,
        answers: question.answers,
        originalAnswers: question.originalAnswers,
        isCorrect: selectedIndex === question.correctAnswer
    };
    
    // Show next button
    document.getElementById('nextBtn').style.display = 'block';
}

// Next Question
function nextQuestion() {
    currentQuiz.currentIndex++;
    
    if (currentQuiz.currentIndex < currentQuiz.questions.length) {
        displayQuestion();
    } else {
        finishQuiz();
    }
}

// Finish Quiz
function finishQuiz() {
    stopTimer();
    
    const totalQuestions = currentQuiz.questions.length;
    const correctCount = currentQuiz.userAnswers.filter(a => a.isCorrect).length;
    const incorrectCount = totalQuestions - correctCount;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const timeTaken = Date.now() - currentQuiz.startTime;
    const minutes = Math.floor(timeTaken / 60000);
    const seconds = Math.floor((timeTaken % 60000) / 1000);
    
    // Display results
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('timeTaken').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Save to history
    saveToHistory({
        date: new Date().toISOString(),
        rangeStart: currentQuiz.rangeStart,
        rangeEnd: currentQuiz.rangeEnd,
        totalQuestions,
        correctCount,
        incorrectCount,
        percentage,
        timeTaken,
        answers: currentQuiz.userAnswers
    });
    
    showScreen('results');
}

// Show Review
function showReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    currentQuiz.userAnswers.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = 'review-item';
        
        const questionNum = document.createElement('div');
        questionNum.style.cssText = 'font-weight: 700; color: var(--primary-color); margin-bottom: 0.5rem;';
        questionNum.textContent = `Question ${index + 1}`;
        item.appendChild(questionNum);
        
        const questionText = document.createElement('div');
        questionText.className = 'review-question';
        questionText.textContent = answer.question;
        item.appendChild(questionText);
        
        if (answer.isCorrect) {
            const correctDiv = document.createElement('div');
            correctDiv.className = 'review-answer both-correct';
            correctDiv.innerHTML = `<div class="answer-label">✓ Your Answer (Correct)</div>${answer.answers[answer.userAnswer]}`;
            item.appendChild(correctDiv);
        } else {
            const userDiv = document.createElement('div');
            userDiv.className = 'review-answer user-answer';
            userDiv.innerHTML = `<div class="answer-label">✗ Your Answer</div>${answer.answers[answer.userAnswer]}`;
            item.appendChild(userDiv);
            
            const correctDiv = document.createElement('div');
            correctDiv.className = 'review-answer correct-answer';
            correctDiv.innerHTML = `<div class="answer-label">✓ Correct Answer</div>${answer.answers[answer.correctAnswer]}`;
            item.appendChild(correctDiv);
        }
        
        reviewContainer.appendChild(item);
    });
    
    showScreen('review');
}

// Reset Quiz
function resetQuiz() {
    if (confirm('Are you sure you want to reset? Your progress will be lost.')) {
        stopTimer();
        currentQuiz = {
            questions: [],
            currentIndex: 0,
            userAnswers: [],
            startTime: null,
            timerInterval: null,
            rangeStart: 1,
            rangeEnd: 20
        };
        showScreen('welcome');
    }
}

// LocalStorage Management
function saveToHistory(result) {
    let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.unshift(result);
    
    // Keep only last 50 results
    if (history.length > 50) {
        history = history.slice(0, 50);
    }
    
    localStorage.setItem('quizHistory', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    // Load recent tests (last 5)
    const recentContainer = document.getElementById('recentTests');
    if (history.length === 0) {
        recentContainer.innerHTML = '<p class="empty-state">No tests completed yet</p>';
    } else {
        recentContainer.innerHTML = '';
        history.slice(0, 5).forEach(test => {
            recentContainer.appendChild(createTestItem(test));
        });
    }
    
    // Load full history
    const fullHistoryContainer = document.getElementById('fullHistoryContainer');
    if (history.length === 0) {
        fullHistoryContainer.innerHTML = '<p class="empty-state">No tests completed yet</p>';
    } else {
        fullHistoryContainer.innerHTML = '';
        history.forEach(test => {
            fullHistoryContainer.appendChild(createHistoryItem(test));
        });
    }
}

function createTestItem(test) {
    const item = document.createElement('div');
    item.className = 'test-item';
    
    const scoreClass = test.percentage >= 70 ? 'good' : test.percentage >= 50 ? 'medium' : 'poor';
    
    const date = new Date(test.date);
    const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    const minutes = Math.floor(test.timeTaken / 60000);
    const seconds = Math.floor((test.timeTaken % 60000) / 1000);
    const timeStr = `${minutes}:${String(seconds).padStart(2, '0')}`;
    
    item.innerHTML = `
        <div class="test-item-header">
            <span class="test-score ${scoreClass}">${test.percentage}%</span>
            <span style="font-size: 0.875rem; color: var(--text-secondary);">${dateStr}</span>
        </div>
        <div class="test-details">
            Questions ${test.rangeStart}-${test.rangeEnd} • 
            ${test.correctCount}/${test.totalQuestions} correct • 
            Time: ${timeStr}
        </div>
    `;
    
    return item;
}

function createHistoryItem(test) {
    const item = document.createElement('div');
    item.className = 'history-item';
    
    const scoreClass = test.percentage >= 70 ? 'good' : test.percentage >= 50 ? 'medium' : 'poor';
    
    const date = new Date(test.date);
    const dateStr = date.toLocaleDateString('sk-SK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const minutes = Math.floor(test.timeTaken / 60000);
    const seconds = Math.floor((test.timeTaken % 60000) / 1000);
    const timeStr = `${minutes}:${String(seconds).padStart(2, '0')}`;
    
    item.innerHTML = `
        <div class="history-item-header">
            <span class="history-score ${scoreClass}">${test.percentage}%</span>
            <span style="font-size: 0.875rem; color: var(--text-secondary);">${dateStr}</span>
        </div>
        <div class="history-info">
            <div class="history-info-item">
                <span class="history-info-label">Question Range</span>
                <span class="history-info-value">${test.rangeStart} - ${test.rangeEnd}</span>
            </div>
            <div class="history-info-item">
                <span class="history-info-label">Correct</span>
                <span class="history-info-value" style="color: var(--success-color);">${test.correctCount}</span>
            </div>
            <div class="history-info-item">
                <span class="history-info-label">Incorrect</span>
                <span class="history-info-value" style="color: var(--error-color);">${test.incorrectCount}</span>
            </div>
            <div class="history-info-item">
                <span class="history-info-label">Time</span>
                <span class="history-info-value">${timeStr}</span>
            </div>
        </div>
    `;
    
    return item;
}

function clearHistory() {
    if (confirm('Are you sure you want to clear all test history? This cannot be undone.')) {
        localStorage.removeItem('quizHistory');
        loadHistory();
    }
}
