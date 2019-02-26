var wins = 0;
var loses = 0;
var round = 0;
var letters = []
var answer = []
var answerSplit = []
    console.log(wins);
    console.log(loses);
    console.log(round);


var countries = ["USA", "CANADA", "MEXICO"];
    console.log(countries);


//
var answerText = document.getElementById("answer-text");

// document.onloadstart = function(event) {

    var letters = countries[round].split('');
    
    var a = letters.length;
        console.log(a);
    var answer = "_".repeat(a);
        console.log(answer);
    var answerSplit = answer.split('');
        console.log(answerSplit);





    answerText.textContent = answerSplit;
// }