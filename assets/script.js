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
var timer = document.querySelector("#start-time");
var questionDiv = document.querySelector("#question-div");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var createUl = document.createElement("ul");

function render(questionList) {
    questionDiv.innerHTML = "";
    createUl.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionList].title;
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

