/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
/* eslint-disable no-throw-literal */
/*

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

document.getElementById('');

class Game {
    constructor() {
        this.playersGuess = null;
        this.pastGuesses = [];
        this.winningNumber = generateWinningNumber();
    }
    difference() { return Math.abs(this.playersGuess - this.winningNumber); }
    isLower() { return (this.playersGuess < this.winningNumber); }
    playersGuessSubmission(number){
        if (typeof (number) !== 'number' || number > 100 || number < 1) { throw 'That is an invalid guess.'; }
        this.playersGuess = number;
        return this.checkGuess();
    }
    checkGuess() {
        let feedbackText = '';
        if (this.playersGuess === this.winningNumber) { feedbackText = 'You Win!'; }
        if (this.pastGuesses.includes(this.playersGuess)) { feedbackText = 'You have already guessed that number.'; }
        this.pastGuesses.push(this.playersGuess);
        if (this.pastGuesses.length === 5) { feedbackText = 'You Lose.'; }
        let diff = this.difference();
        switch (true) {
            case (diff < 10): feedbackText = `You're burning up!`;
            case (diff < 25): feedbackText = `You're lukewarm.`;
            case (diff < 50): feedbackText = `You're a bit chilly.`;
            case (diff < 100): feedbackText = `You're ice cold!`;
        }
        // these lines will make the test specs fail
        document.querySelector('#guess-feedback > h4').innerHTML = feedbackText;
        document.querySelector(`#guess-list li:nth-child(${this.pastGuesses.length})`).innerHTML = this.playersGuess
        return feedbackText;
    }
    provideHint(hintArray = []) {
        hintArray.push(this.winningNumber, generateWinningNumber(), generateWinningNumber());
        return shuffle(hintArray);
    }
}
function generateWinningNumber() { return Math.floor(1 + (Math.random() * 100)); }
function newGame() { return new Game(); }
function shuffle(arr) { // Fisher-Yates shuffle
    for (let i = arr.length - 1; i >= 0; i--) {
        let nextElement = Math.ceil(i * Math.random());
        let temp = arr[i];
        arr[i] = arr[nextElement];
        arr[nextElement] = temp;
    }
    return arr;
}


function playGame() {
    const game = newGame();
    
    // We are grabbing the submit button from our html using getElementById
    const button = document.getElementById('submit'); 
    // instead of querySelector, so we can refer to exactly one button only.  
  
    // We are listening for when the use clicks on our button.
    // When they click, we will check in the input field to see if they have guessed a number. Then we will run the function `checkGuess`, and give it the player's guess, the winning number, and the empty array of guesses!
    button.addEventListener('click', function() {
      const playersGuess = +document.querySelector('input').value;
      document.querySelector('input').value = '';
  
      game.playersGuessSubmission(playersGuess);
    });

    // We're listening for when the user presses Enter in the input field, and if so we submit the guess if it exists.  
    const enter = document.querySelector('input');
    enter.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const playersGuess = +document.querySelector('input').value;
            document.querySelector('input').value = '';
            game.playersGuessSubmission(playersGuess);
        }
    });

    const reset = document.querySelector()
  }
  // start up the game!
  playGame(); // note: running this function will cause the test specs to fail