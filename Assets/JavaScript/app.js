$(document).ready(function() {

    // 1. create a nested array of questions
    //      * add a boolean to each question
    var Questions = [
        ["How many people are there in the world?", true],
        ["Is Hugh Jackman in this photo?", true],
        ["Is this Hanibal Buress?", false],
        ["Is this Lady Gaga's real name?", false],
        ["Did Mark Hamill Play the Joker?", true],
        ["Did Steven Spielburg get payed for his work on 'Schindler's List'?", false]
    ];

    // Variables
    var clockRunning = false;
    var time = 60;

    start();

    function isTrue() {
        if (Questions[i[1]] === true) {
            alert("That is correct, on to the next question!");
            reset();
            start();
            i++;
        } else if (Questions[i[1]] === false) {
            alert("That is correct, on to the next question!");
            reset();
            start();
            i++;
        } else {
            alert("I'm sorry that's not right, better luck next time!");
            reset();
            start();
            i++;
        }
    }

    $("#Button1").click(isTrue());
    $("#Button2").click(isTrue());


    // 3. set a timer to count down from [Undefined] minutes
    //      * create an alert of the time to let the player know how long they have left

    function start() {

        //  TODO: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;
        }
        console.log("it's started")
    }

    function reset() {

        time = 60;
        lap = 1;

        $("#Timer").html("00:00");

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


    start();

    // 4. set an if statement, whether the player answers all the questions and submits them, or the time runs out
    //      * if the time runs out take all the answers already selected, and set the unanswered questions to false
    // 5. 
    // 
    // 





});