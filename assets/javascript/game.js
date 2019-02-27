var wins = 0;
var loses = 0;
var round = 0;
var remainGuess = 9;
var letters = [];
var answer = [];
var guessList = []
// var answerSplit = []
    console.log(wins);
    console.log(loses);
    console.log(round);
    console.log(remainGuess);


var countries = ["USA", "CANADA", "MEXICO"];
    console.log(countries);


//
// var answerText = document.getElementById("answer-text");



function reset(x) {
    //splits each letter of the country in a separate part of an array
    var letters = countries[x].split('');
        console.log(letters);
    // defines a variable as how many letters a country has
    var a = letters.length;
        console.log(a);
    // generates the number of '_' for each letter of the country
    var answer = " _".repeat(a);
        console.log(answer);
    //makes the _'s as something that can be in the HTML
    document.getElementById("answer-text").innerHTML= answer;
    // var answerSplit = answer.split('');
    //     console.log(answerSplit);
}

function checkGuess(y) {
    for (var i = 0; i < letters.length; i++) {
        if (y == letters[i]) {
            var j = i * 2;
            items[answer[j]] = y;
            document.getElementById("answer-text").innerHTML= answer;
        }
    }
}

window.onload = function () {
    reset(round);
};

document.onkeyup = function(event) {

    var userInput = event.key;
    var userGuess = userInput.toUpperCase();
    
    guessList.push(userGuess);
    document.getElementById("guess-list").innerHTML= guessList;

    // checkGuess(userGuess)

    // for (i = 0; i < guessList.length; i++) {
    //     if (userGuess === guessList[i]) {
    //         null;
    //     }
    //     else {
    //         guessList.push(userGuess);
    //         document.getElementById("guess-list").innerHTML= guessList;
    //     }
    // }




}







    // answerText.textContent = answer;
