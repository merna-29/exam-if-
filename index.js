function evaluateScore(score) {
    if (typeof score !== 'number' || isNaN(score)) {
        return "Not a Number";
    } else if (score > 100 || score < 0) {
        return "Invalid Score";
    } else if (score === 100) {
        return "Perfect Score";
    } else if (score >= 85) {
        return "You got an A";
    } else if (score >= 75) {
        return "You got a B";
    } else if (score >= 65) {
        return "You got a C";
    } else if (score >= 50) {
        return "You got a D";
    } else {
        return "You got an F";
    }
}

function checkScore() {
    const scoreInput = document.getElementById("scoreInput").value;
    const score = parseFloat(scoreInput); 
    const result = evaluateScore(score);
    document.getElementById("result").textContent = result;
}
