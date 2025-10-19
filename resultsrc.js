// Get elements from the page
const percentageElement = document.getElementById('percentage');
const scoreDetailsElement = document.getElementById('scoreDetails');
const progressFillElement = document.getElementById('progressFill');
const messageElement = document.getElementById('message');

// Get score from localStorage (set in questionsrc.js)
const correctAnswers = parseInt(localStorage.getItem('quizScore')) || 0;
const totalQuestions = parseInt(localStorage.getItem('totalQuestions')) || 10;

// Calculate percentage
const percentage = Math.round((correctAnswers / totalQuestions) * 100);

// Function to animate the progress bar
function animateProgressBar() {
    let currentWidth = 0;
    const targetWidth = percentage;
    const increment = targetWidth / 100; // Smooth animation over 100 steps
    
    const animationInterval = setInterval(() => {
        currentWidth += increment;
        if (currentWidth >= targetWidth) {
            currentWidth = targetWidth;
            clearInterval(animationInterval);
        }
        progressFillElement.style.width = currentWidth + '%';
    }, 20); // Update every 20ms for smooth animation
}

// Function to animate the percentage counter
function animatePercentage() {
    let currentPercentage = 0;
    const targetPercentage = percentage;
    const increment = targetPercentage / 25; // Smooth animation over 25 steps
    
    const percentageInterval = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= targetPercentage) {
            currentPercentage = targetPercentage;
            clearInterval(percentageInterval);
        }
        percentageElement.textContent = Math.round(currentPercentage) + '%';
    }, 40); // Update every 40ms
}

// Function to get motivational message based on score
function getMotivationalMessage(percentage) {
    if (percentage >= 90) {
        return "🎉 Excellent! You're a quiz master!";
    } else if (percentage >= 80) {
        return "🌟 Great job! You did really well!";
    } else if (percentage >= 70) {
        return "👍 Good work! Keep it up!";
    } else if (percentage >= 60) {
        return "📚 Not bad! A bit more practice will help!";
    } else if (percentage >= 50) {
        return "💪 You're getting there! Keep learning!";
    } else {
        return "📖 Don't give up! Practice makes perfect!";
    }
}

// Function to update score details
function updateScoreDetails() {
    scoreDetailsElement.textContent = `${correctAnswers} out of ${totalQuestions} correct`;
}

// Function to update message
function updateMessage() {
    messageElement.textContent = getMotivationalMessage(percentage);
}

// Start animations when page loads
window.addEventListener('load', () => {
    // Update static content first
    updateScoreDetails();
    updateMessage();
    
    // Start animations with a small delay
    setTimeout(() => {
        animatePercentage();
        animateProgressBar();
    }, 500);
});

// Optional: Add click effect to retry button
document.addEventListener('DOMContentLoaded', () => {
    const retryButton = document.querySelector('.footer a');
    if (retryButton) {
        retryButton.addEventListener('click', () => {
            // Clear the stored score when retrying
            localStorage.removeItem('quizScore');
            localStorage.removeItem('totalQuestions');
        });
    }
});
