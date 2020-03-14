window.onload = function() {
    $("#Button1").on("click", function() { return isTrue(loop, "button1") });
    $("#Button2").on("click", function() { return isTrue(loop, "button2") });
};

var Questions = [
    ["How many people are there in the world?", true],
    ["Is Hugh Jackman in this photo?", true],
    ["Is this Hanibal Buress?", false],
    ["Is this Lady Gaga's real name?", false],
    ["Did Mark Hamill Play the Joker?", true],
    ["Did Steven Spielburg get payed for his work on 'Schindler's List'?", false]
];

var images = [];

// Variables
var clockRunning = false;
var time = 60;
var wins = 0;
var loses = 0;
var loop = 0;

function isTrue(i, button) {
    if (Questions[i[1]] === true && button === "button1") {
        alert("That is correct, on to the next question!");
        wins++
        reset();
        start();
        i++;
        display(Questions, images, i, 1);
    } else if (Questions[i[1]] === false && button === "button2") {
        alert("That is correct, on to the next question!");
        wins++
        reset();
        start();
        i++;
        display(Questions, images, i, 1);
    } else {
        alert("I'm sorry that's not right, better luck next time!");
        loses++
        reset();
        start();
        i++;
        display(Questions, images, i, 1);
    }
}


function display(qArray, Iarray, i, p) {
    for (loop = 0; loop < Questions.length; loop++) {
        if (loop < Questions.length) {
            $("#Questions").html(qArray[i[p]]);
            $("#Images").html(Iarray[i]);
        } else {
            alert("Congrats you finished the quiz!");
            alert("Wins: " + wins + "Loses: " + loses);
        }
    }





}

// 3. set a timer to count down from [Undefined] minutes
//      * create an alert of the time to let the player know how long they have left

function start() {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
    if (time === 0) {
        reset();
    }
    console.log("it's started");
}

function reset() {

    time = 60;

    $("#Timer").html("01:00");

}

function count() {

    //  TODO: increment time by 1, remember we cant use "this" here.
    time--;
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    var currentTime = timeConverter(time);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#Timer").text(currentTime);
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


    start();

    // 4. set an if statement, whether the player answers all the questions and submits them, or the time runs out
    //      * if the time runs out take all the answers already selected, and set the unanswered questions to false
    // 5. 

});