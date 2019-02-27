var wins = 0;
var loses = 0;
var round = 0;
var remainGuess = 9;
var letters = [];
var answer = [];
var guessList = [];
var letters = "";
var a = "";
var answers = "";
var answerSplit = "";
var j = "";
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
    var answer = "_ ".repeat(a);
        console.log(answer);
    //makes the _'s as something that can be in the HTML
    document.getElementById("answer-text").innerHTML= answer;
    var answerSplit = answer.split('');
        console.log(answerSplit);
}

function checkGuess(y) {
    for (var i = 0; i < letters.length; i++) {
        if (letters.indexOf(y) != -1) {
            var j = i * 2;
            items[answer[j]] = y;
            console.log(answer);
            document.getElementById("answer-text").innerHTML= answer;
        }
    }
}

window.onload = function () {
    var letters = countries[1].split('');
        console.log(letters);
    // defines a variable as how many letters a country has
    var a = letters.length;
        console.log(a);
    // generates the number of '_' for each letter of the country
    var answer = "_".repeat(a);
        console.log(answer);
    //makes the _'s as something that can be in the HTML
    document.getElementById("answer-text").innerHTML= answer;
    var answerSplit = answer.split('');
        console.log(answerSplit);



document.onkeyup = function(event) {

    //logs player's selection
    var userInput = event.key;
    //changes selection to upper case
    var userGuess = userInput.toUpperCase();
        console.log(userGuess)
    
    //addes selection to list of guesses
    guessList.push(userGuess);
    document.getElementById("guess-list").innerHTML= guessList;

    //can't get below to work
    for (var i = 0; i < letters.length; i++) {
        if (userGuess == letters[i]) {
            // var j = i * 2;
            answerSplit.splice(i, 1, userGuess);
                console.log(answerSplit);
            document.getElementById("answer-text").innerHTML= answer;
            answer=answerSplit.join();
            document.getElementById("answer-text").innerHTML= answer;

        }
    }

}
//             // for (i = 0; i < guessList.length; i++) {
//             //     if (userGuess === guessList[i]) {
//             //         null;
//             //     }
//             //     else {
//             //         guessList.push(userGuess);
//             //         document.getElementById("guess-list").innerHTML= guessList;
//             //     }
//             // }




}







    // answerText.textContent = answer;
