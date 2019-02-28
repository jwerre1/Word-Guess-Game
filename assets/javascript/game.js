var countries = ["USA", "CANADA", "MEXICO", "FRANCE", "MAURITIUS", "COMOROS", "SEYCHELLES", "TUVALU", "BHUTAN"];
var letters = "";
var answerLength = "";
var display = "";
var dashes = [];
var guessesRemain = 0;
var round = 0; 
var userInput = "";
var userGuess = "";
var guessList = [];
var wins = 0;
var nextRound;
var answer = ""


function reset(input) {
    letters = countries[input].split("");
        console.log(letters);
    answerLength = letters.length;
        console.log(answerLength);
    guessesRemain = answerLength + 3;
        console.log(guessesRemain);
    document.getElementById("guesses-remaining").innerHTML=guessesRemain;
    guessList = [];
    document.getElementById("guess-list").innerHTML = guessList;
    
    //creates initial display of correct # of dashes
    for (i = 0; i < letters.length; i++) {
        dashes[i] = "_ ";
        display = display + dashes[i];
    document.getElementById("answer-text").innerHTML = display;
        console.log(display);
    }
    display = "";
    document.getElementById("wins").innerHTML = wins;
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
        answer = display;
        document.getElementById("answer-text").innerHTML = display;
            console.log(display);
    }
    display = "";
}

function checkWin(input) {
    if (input === countries[round]) {
        wins++;
        round = round + 1;
        reset (round);
        document.getElementById("win-lose").innerHTML = "YOU WIN!";
        document.getElementById("previous-word").innerHTML = countries[round - 1];
    }
    document.getElementById("wins").innerHTML = wins;
        console.log(round);
        // console.log(nextRound);
}

function checkLoss(input) {
    if (input === 0) {
        round = round + 1;
        reset (round);
        document.getElementById("win-lose").innerHTML = "You lost.";
        document.getElementById("previous-word").innerHTML = countries[round - 1];
    }
}

//GAME ACTUALLY BEGINNING

window.onload = function () {  
    reset(round);
}

document.onkeyup = function (event) {

    var userInput = event.key;
    var userGuess = userInput.toUpperCase();
        console.log(userGuess);
    
    //check to see if player has already guessed
    if (guessList.indexOf(userGuess) == -1) {
        check(userGuess);
        guessList.push(userGuess);
        guessesRemain--;
    }
        console.log(guessList);

    checkWin(answer);
        console.log(answer);
        console.log(countries[round]);
    
    checkLoss(guessesRemain);

    //updated guess list
    document.getElementById("guess-list").innerHTML = guessList;
    //update number of guesses remaining
    document.getElementById("guesses-remaining").innerHTML=guessesRemain;
}
