'use strict';
/*
//selecting and manupulating elements
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'correct number!!!')
);
console.log((document.querySelector('.number').textContent = 16));
console.log((document.querySelector('.score').textContent = 9));
console.log((document.querySelector('.guess').value = 9));*/

let score = 20;
let avg = 21;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter number!!!';
    document.querySelector('body').style.background = '#ff0000';
  } else if (guess > avg) {
    document.querySelector('.message').textContent =
      ' Please enter number between 1 to 20:)';
  }
  //when it is equal to
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number :)';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //whenever we are manupulating a style in dom we have to give string
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Your number is too high :('
          : 'Your number is too Low :(';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  //when it is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your number is too high :(';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when it is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your number is too Low :(';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});
