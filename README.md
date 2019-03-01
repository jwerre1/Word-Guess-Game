# Word-Guess-Game
Word Guessing Game


### Game Play

As prompted, you begin the game by pressing any letter button. Pressing a button other than a letter will not be registered. 

Before you begin, you are present with the first word. Notice that you are presented with three blanks and six guesses to fill in the 3 blanks. 

If you are able to correctly guess the word, a new set of dashes generates, the win count goes up by one, and the "guesses remaining" counter restarts. A "Yehaw" sould also plays.

If you loose, a new dashes gerates and the "reamining guesses" restart, but you the win count does not increase and you hear a "Doh" sound. 

No matter if you win or loose, an new set of texts appears on the screen stating whichever situation. You can also see what the previous word was.

### Code

The html is straitforward. Within game.js, four functions are established:

1. reset(input) establishes a new word, generates the dashes, and generates the number of guesses the player gets. 

2. check(input) updates the answer area on the page if the player chooses correctly.

3. checkWin(input) sees if the player has completed the word/

4. checkLoss(input) sees if they have lost, or run out of guesses. 

Beginning in Line 88, you can see that when a player presses a key, it is logged as variable and is modified to be upper case. Then if the key has not been already guesses and is also a letter, the program runs the check(input) function.

The list of guesses is updated, as well as the number of remaining guesses. 

Then, checkWin(input) and checkLoss(input) are ran. 