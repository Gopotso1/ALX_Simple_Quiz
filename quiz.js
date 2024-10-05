function checkAnswer() {
    var correctAnswer = "4"; // Correct answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value; // Get the user's answer

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."; // Feedback for correct answer
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"; // Feedback for incorrect answer
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
