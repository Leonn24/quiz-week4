//Leon's Quiz Homework Send help pls...
var questions = [{
    ques: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
},
{
    ques: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"

},
{
    ques: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},
{
    ques: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
},

];

var score = 0;
var questionList = 0;

var time = document.querySelector("#time");
var sTimer = document.querySelector("#startQ");
var questionDiv = document.querySelector("#questionDiv");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var createUl = document.createElement("ul");



sTimer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            time.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                time.textContent = "Times Up!";
            }
        }, 1000);
    }
    render(questionList);
});


// Should render questions to the page
function render(questionList) {
    questionDiv.innerHTML = "";
    createUl.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionList].ques;
        var userChoices = questions[questionList].choices;
        questionDiv.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionDiv.appendChild(createUl);
        createUl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })

}

// Took a break here [todo = will need a function to compare answer to choices I think?]

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionList].answer) {
            score++;
            createDiv.textContent = "Correct, The answer is: " + questions[questionList].answer;
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is : " + questions[questionList].answer;
        }
    }


    questionList++;

    if (questionList >= questions.length) {
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got " + score + "/" + questions.length + "Correct!";
    } else {
        render(questionList);
    }
    questionDiv.appendChild(createDiv);



}


// Break [Note to self: need to append last page for labels, initials, Submit,]
var createLabel = document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent = "Enter your Initals ";




var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";


var createSubmit = document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("id", "Submit");
createSubmit.textContent = "Submit";

function allDone() {
    questionDiv.innerHTML = "";
    time.innerHTML = "";


    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionDiv.appendChild(createP);

    questionDiv.appendChild(createLabel);
    questionDiv.appendChild(createInput);
    questionDiv.appendChild(createSubmit);


}


var startTime = 76;
var currentTime = startTime;

function updateTimer() {
    currentTime--;
}


createSubmit.addEventListener("click", function () {
    var initials = createInput.value.trim();

    if (initials === "") {
        console.log("No value entered!");
    } else {
        var timeRemaining = currentTime;

        var finalScore = {
            initials: initials,
            score: timeRemaining,
        };

        console.log(finalScore);

        var allScores = localStorage.getItem("allScores");

        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }

        allScores.push(finalScore);

        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);

        window.location.replace("/scores.html");
    }
});
