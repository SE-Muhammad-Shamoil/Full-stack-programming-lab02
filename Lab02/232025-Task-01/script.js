// Student details for console logging or potentially dynamic insertion
const studentName = "Muhammad Shamoil";
const registrationId = "232025";

console.log(`Quiz App Initialized for: ${studentName} (${registrationId})`);

// 1. Store each question and answer in separate variables (as per requirements)
// We will then aggregate them for easier processing, but they exist independently first.

const question1 = {
    id: "q1",
    text: "What does CSS stand for?",
    correctAnswer: "Cascading Style Sheets"
};

const question2 = {
    id: "q2",
    text: "Which HTML tag is used to define an internal style sheet?",
    correctAnswer: "style"
};

const question3 = {
    id: "q3",
    text: "Which method is used to write specifically into the browser console?",
    correctAnswer: "console.log"
};

const question4 = {
    id: "q4",
    text: "How do you declare a JavaScript function?",
    correctAnswer: "function"
};

// Grouping them for easier iteration in our logic
const quizData = [question1, question2, question3, question4];

// Select DOM elements
const form = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score-display');
const feedbackMessage = document.getElementById('feedback-message');

// Initialize the quiz text dynamically
function initQuiz() {
    quizData.forEach(q => {
        const titleEl = document.getElementById(`${q.id}-text`);
        if (titleEl) {
            titleEl.innerText = q.text;
        }
    });
}

// 2. Use functions to check each answer individually and calculate total score.
function calculateScore() {
    let score = 0;
    const totalQuestions = quizData.length;

    // Get all user selected values
    const formData = new FormData(form);

    quizData.forEach((question) => {
        const userHeader = document.getElementById(`${question.id}-card`);
        const userAnswer = formData.get(question.id); // Get value by name attribute (q1, q2...)

        // Reset previous styling
        userHeader.classList.remove('correct', 'incorrect');

        if (userAnswer === question.correctAnswer) {
            score++;
            userHeader.classList.add('correct');
        } else if (userAnswer) {
            // User answered but wrong
            userHeader.classList.add('incorrect');
        } else {
            // Unanswered (optional: mark as incorrect or leave neutral)
           // userHeader.classList.add('incorrect');
        }
    });

    return score;
}

// 3. Display results dynamically using DOM manipulation
function showResults() {
    const finalScore = calculateScore();
    const total = quizData.length;
    
    // Update DOM
    scoreDisplay.innerText = `${finalScore}`;
    document.querySelector('.total').innerText = `/ ${total}`;
    
    // 4. Use conditional statements to display messages based on the score
    let message = "";
    if (finalScore === total) {
        message = "Excellent! You tried to impress and you succeeded! 🌟";
    } else if (finalScore >= total / 2) {
        message = "Good job! You're on the right track. 👍";
    } else {
        message = "Keep practicing! You'll get it next time. 💪";
    }
    
    feedbackMessage.innerText = message;
    
    // Show container with animation
    resultContainer.classList.remove('hidden');
    
    // Scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// 5. Include a Reset Quiz button to clear all inputs and results
function resetQuiz() {
    form.reset();
    resultContainer.classList.add('hidden');
    
    // Remove status classes from all cards
    const cards = document.querySelectorAll('.question-card');
    cards.forEach(card => {
        card.classList.remove('correct', 'incorrect');
    });

    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
submitBtn.addEventListener('click', showResults);
resetBtn.addEventListener('click', resetQuiz);

// Initialize on load
document.addEventListener('DOMContentLoaded', initQuiz);
