window.onload = function() {
    $("#Button1").on("click", function() { return isTrue("button1") });
    $("#Button2").on("click", function() { return isTrue("button2") });
};

var Questions = [
    ["Joker is the highest grossing R rated movie of all time?", true],
    ["A human head was found in the infamous scene in 'The Godfather'?", false],
    ["Is this Hanibal Buress?", false],
    ["In the matrix does Neo take the red pill?", true],
    ["Did Mark Hamill Play the Joker?", true],
    ["Did Steven Spielburg get payed for his work on 'Schindler's List'?", false]
];

var images = ["assets/Images/joker.jpg", "assets/Images/GodFather.jpg", "assets/Images/hannibalBuress.jpg", "assets/Images/Matrix.jpeg", "assets/Images/animatedJoker.jpg", "assets/Images/schindlersList.jpg"];

// Variables
var clockRunning = false;
var time = 10;
var wins = 0;
var loses = 0;
var currentQuestion = 0;

function isTrue(button, i = currentQuestion) {
    console.log(currentQuestion);
    currentQuestion++;
    if (Questions[i][1] === true && button === "button1") {
        alert("That is correct, on to the next question!");
        wins++
        reset();
        start();
        display();
    } else if (Questions[i][1] === false && button === "button2") {
        alert("That is correct, on to the next question!");
        wins++
        reset();
        start();
        display();
    } else if (Questions[i][1] === false && button === "button1" || Questions[i][1] === true && button === "button2") {
        alert("I'm sorry that's not right, better luck next time!");
        loses++
        reset();
        start();
        display();
        console.log(currentQuestion);
    } else if (time === 0) {
        alert("I'm sorry but you didn't answer in time!");
        loses++
        reset();
        start();
        display();
        console.log(currentQuestion);
    }
}


function display(qArray = Questions, Iarray = images, i = currentQuestion) {
    if (currentQuestion + 1 == qArray.length) {
        $("#Questions").text(qArray[i][0]);
        $("#Images").html("<img src = '" + Iarray[i] + "'>");
    } else if (currentQuestion < qArray.length) {
        $("#Questions").text(qArray[i][0]);
        $("#Images").html("<img src = '" + Iarray[i] + "'>");
    } else {
        stop();
        alert("Congrats you finished the quiz!");
        alert("Wins: " + wins + " Loses: " + loses);
    }
}

// 3. set a timer to count down from [Undefined] minutes
//      * create an alert of the time to let the player know how long they have left

function start() {

    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
    if (time === 0) {
        console.log("it reset");
        reset();
    }
    console.log("it's started");
}

function stop() {

    clearInterval(intervalId);
    clockRunning = false;
}

function reset() {

    time = 30;

    $("#Timer").html("00:30");

}

function count() {

    if (time === 0) {
        isTrue();
    } else {

        time--;

        var currentTime = timeConverter(time);
        console.log(time);

        $("#Timer").text(currentTime);
    }

}

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

$(document).ready(function() {

    // 1. create a nested array of questions
    //      * add a boolean to each question
    console.log("document ready ran");
    display();
    start();

    // 4. set an if statement, whether the player answers all the questions and submits them, or the time runs out
    //      * if the time runs out take all the answers already selected, and set the unanswered questions to false
    // 5. 

});