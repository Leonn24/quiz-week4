// Select elements from the HTML //

var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener for the "Clear High Scores" button //

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retrieve and parse the stored high scores from local storage //

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li")
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Event listener for the "Go Back" button //

goBack.addEventListener("click", function () {
    window.location.replace("/index.html");
});
