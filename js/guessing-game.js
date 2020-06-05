/* eslint-disable default-case */
/* eslint-disable no-throw-literal */
/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/
function generateWinningNumber() { return Math.floor(1 + (Math.random() * 100)); }
function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let nextElement = Math.floor(Math.random() * (i + 1));
        let currentI = arr[i];
        arr[i] = arr[nextElement];
        arr[nextElement] = currentI;
    }
    return arr;
}

function Game() {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
}
Game.prototype.difference = function() {
    return Math.abs(this.playersGuess - this.winningNumber);
}
Game.prototype.isLower = function() {
    return (this.playersGuess < this.winningNumber);
}
Game.prototype.playersGuessSubmission = function(number) {
    if (typeof (number) !== 'number' || number > 100 || number < 1) { throw 'That is an invalid guess.'; }
    this.playersGuess = number;
    return this.checkGuess();
}
Game.prototype.checkGuess = function() {
    if (this.playersGuess === this.winningNumber) { return 'You Win!'; }
    if (this.pastGuesses.includes(this.playersGuess)) { return 'You have already guessed that number.'; }
    this.pastGuesses.push(this.playersGuess);
    if (this.pastGuesses.length === 5) { return 'You Lose.'; }
    let diff = this.difference();
    switch (true) {
        case (diff < 10): return `You're burning up!`;
        case (diff < 25): return `You're lukewarm.`;
        case (diff < 50): return `You're a bit chilly.`;
        case (diff < 100): return `You're ice cold!`;
    }
}
function newGame() { return new Game(); }
Game.prototype.provideHint = function(hintArray = []) {
    hintArray.push(this.winningNumber, generateWinningNumber(), generateWinningNumber());
    return shuffle(hintArray);
}