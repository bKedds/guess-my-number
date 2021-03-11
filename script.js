'use strict';
window.onload = function () {
  document.getElementById('mario').play();
};
let magicNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const playSong = function () {
  document.getElementById('my-audio').play();
};

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If no input
  if (!guess) {
    displayMessage('No number...');

    //When player wins
  } else if (guess === magicNumber) {
    playSong();
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = magicNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Guess is wrong
  } else if (guess !== magicNumber) {
    if (score > 1) {
      displayMessage(guess > magicNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  magicNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
