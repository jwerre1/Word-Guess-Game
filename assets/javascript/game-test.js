var countries = ["USA", "CANADA", "MEXICO"];
var letters = "";
var answerLength = "";
var display = "";
var dashes = [];
var userInput = "";
var userGuess = "";
var guessList = [];
var wins = 0;
var loses = 0;


function reset(input) {
    letters = countries[input].split("");
        console.log(letters);
    answerLength = letters.length;
        console.log(answerLength);
    
    //creates initial display of correct # of dashes
    for (i = 0; i < letters.length; i++) {
        dashes[i] = "_ ";
        display = display + dashes[i];
    document.getElementById("answer-text").innerHTML = display;
        console.log(display);
    }
    display = "";
}

function check(input) {
    for (i = 0; i < letters.length; i++) {
        if (input == letters[i]) {
            dashes[i] = input;
        }
        // else {
        //     guessList.push(input);
        // }
        display = display + dashes[i];
        document.getElementById("answer-text").innerHTML = display;
            console.log(display);
    }
    display = "";
}

//GAME ACTUALLY BEGINNING

window.onload = function () {  
    reset(0);
}

document.onkeyup = function (event) {

    var userInput = event.key;
    var userGuess = userInput.toUpperCase();
        console.log(userGuess);
    
    if (guessList.indexOf(userGuess) == -1) {
        check(userGuess);
        guessList.push(userGuess);
    }
        console.log(guessList);
    document.getElementById("guess-list").innerHTML = guessList;
}
