// var list

var showScore = document.getElementById("show-highscore");
var storedScores = JSON.parse(localStorage.getItem("Quiz Score"));

function displayScore() {
    for (var i = 0; i < storedScores.length; i++) {
        var entries = document.createElement("li");
        entries.textContent = storedScores[i].Name + " - " + storedScores[i].Score;

        showScore.appendChild(entries);
    }
}

displayScore();