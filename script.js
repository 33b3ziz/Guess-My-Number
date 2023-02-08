'use strict';
// document.querySelector();
// document.addEventListener() // Takes two argument (Event name, function "Event Handler")
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
const bg = document.querySelector('body');
const highScore = document.querySelector('.highscore');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Check the input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('Please write a number!');
    score--;
    displayScore(score);

    // When player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    document.querySelector('.number').style.width = '20rem';
    displayMessage('Correct! 🥳');
    displayScore(score);

    bg.style.backgroundColor = '#60b347';

    if (score >= highScore.textContent) {
      highScore.textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('Unfortunately you lost, try again');
      displayScore(0);
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.number').style.width = '15rem';
  bg.style.backgroundColor = '#222';
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';
});

// another solution
// document.querySelector('.again').addEventListener('click', function () {
//   window.location.reload();
// });
