'use strict'; //using strict mode

//selecting the required DOM elements
let rollDicePress = document.querySelector('.btn--roll');
let holdPress = document.querySelector('.btn--hold');
let newGamePress = document.querySelector('.btn--new');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

//declaring required variables
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;

//function that is the event handler of diceRollPress button
function diceRoll() {
  let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  if (randomDiceNumber === 1) {
    displayDice1();
    switchPlayer();
    console.log(randomDiceNumber);
  } else if (randomDiceNumber === 2) {
    displayDice2();
    updateCurrentScore(randomDiceNumber);
    console.log(randomDiceNumber);
  } else if (randomDiceNumber === 3) {
    displayDice3();
    updateCurrentScore(randomDiceNumber);
    console.log(randomDiceNumber);
  } else if (randomDiceNumber === 4) {
    displayDice4();
    updateCurrentScore(randomDiceNumber);
    console.log(randomDiceNumber);
  } else if (randomDiceNumber === 5) {
    displayDice5();
    updateCurrentScore(randomDiceNumber);
    console.log(randomDiceNumber);
  } else if (randomDiceNumber === 6) {
    displayDice6();
    updateCurrentScore(randomDiceNumber);
    console.log(randomDiceNumber);
  }

  //   if (!randomDiceNumber === 1) {
  //     currentScorePlayer1 = currentScorePlayer1 + randomDiceNumber;
  //     document.querySelector('#current--0').textContent = currentScorePlayer1;
  //   }
}

//function that is the event handler of holdPress button
function hold() {
  if (player1.classList.contains('player--active')) {
    totalScorePlayer1 = totalScorePlayer1 + currentScorePlayer1;
    document.querySelector('#score--0').textContent = totalScorePlayer1;
    document.querySelector('#current--0').textContent = 0;
    switchPlayer();
  } else {
    totalScorePlayer2 = totalScorePlayer2 + currentScorePlayer2;
    document.querySelector('#score--1').textContent = totalScorePlayer2;
    document.querySelector('#current--1').textContent = 0;
    switchPlayer();
  }

  if (totalScorePlayer1 >= 100) {
    player1.classList.add('player--winner');
    rollDicePress.classList.add('hidden');
    holdPress.classList.add('hidden');
  } else if (totalScorePlayer2 >= 100) {
    player2.classList.add('player--winner');
    rollDicePress.classList.add('hidden');
    holdPress.classList.add('hidden');
  }
}

//function that is the event handler of newGamePress button
function reset() {
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  currentScorePlayer1 = 0;
  totalScorePlayer1 = 0;

  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  currentScorePlayer2 = 0;
  totalScorePlayer2 = 0;

  if (player1.classList.contains('player--winner')) {
    player1.classList.remove('player--winner');
    rollDicePress.classList.remove('hidden');
    holdPress.classList.remove('hidden');
  } else if (player2.classList.contains('player--winner')) {
    player2.classList.remove('player--winner');
    rollDicePress.classList.remove('hidden');
    holdPress.classList.remove('hidden');
  }

  if (!player1.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
}

//utility functions:

function displayDice1() {
  document.querySelector('#dice1').style.display = 'block';
  document.querySelector('#dice2').style.display = 'none';
  document.querySelector('#dice3').style.display = 'none';
  document.querySelector('#dice4').style.display = 'none';
  document.querySelector('#dice5').style.display = 'none';
  document.querySelector('#dice6').style.display = 'none';
}

function displayDice2() {
  document.querySelector('#dice1').style.display = 'none';
  document.querySelector('#dice2').style.display = 'block';
  document.querySelector('#dice3').style.display = 'none';
  document.querySelector('#dice4').style.display = 'none';
  document.querySelector('#dice5').style.display = 'none';
  document.querySelector('#dice6').style.display = 'none';
}

function displayDice3() {
  document.querySelector('#dice1').style.display = 'none';
  document.querySelector('#dice2').style.display = 'none';
  document.querySelector('#dice3').style.display = 'block';
  document.querySelector('#dice4').style.display = 'none';
  document.querySelector('#dice5').style.display = 'none';
  document.querySelector('#dice6').style.display = 'none';
}

function displayDice4() {
  document.querySelector('#dice1').style.display = 'none';
  document.querySelector('#dice2').style.display = 'none';
  document.querySelector('#dice3').style.display = 'none';
  document.querySelector('#dice4').style.display = 'block';
  document.querySelector('#dice5').style.display = 'none';
  document.querySelector('#dice6').style.display = 'none';
}

function displayDice5() {
  document.querySelector('#dice1').style.display = 'none';
  document.querySelector('#dice2').style.display = 'none';
  document.querySelector('#dice3').style.display = 'none';
  document.querySelector('#dice4').style.display = 'none';
  document.querySelector('#dice5').style.display = 'block';
  document.querySelector('#dice6').style.display = 'none';
}

function displayDice6() {
  document.querySelector('#dice1').style.display = 'none';
  document.querySelector('#dice2').style.display = 'none';
  document.querySelector('#dice3').style.display = 'none';
  document.querySelector('#dice4').style.display = 'none';
  document.querySelector('#dice5').style.display = 'none';
  document.querySelector('#dice6').style.display = 'block';
}

function updateCurrentScorePlayer1(randomDiceNumber) {
  currentScorePlayer1 = currentScorePlayer1 + randomDiceNumber;
  document.querySelector('#current--0').textContent = currentScorePlayer1;
}

function updateCurrentScorePlayer2(randomDiceNumber) {
  currentScorePlayer2 = currentScorePlayer2 + randomDiceNumber;
  document.querySelector('#current--1').textContent = currentScorePlayer2;
}

function updateCurrentScore(randomDiceNumber) {
  if (player1.classList.contains('player--active')) {
    updateCurrentScorePlayer1(randomDiceNumber);
  } else {
    updateCurrentScorePlayer2(randomDiceNumber);
  }
}

// function resetScore1(currentScorePlayer1) {
//   document.querySelector('#current--0').textContent = 0;
//   currentScorePlayer1 = 0;
// }

// function resetScore2(currentScorePlayer2) {
//   document.querySelector('#current--1').textContent = 0;
//   currentScorePlayer2 = 0;
// }

function switchPlayer() {
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    document.querySelector('#current--0').textContent = 0;
    currentScorePlayer1 = 0;
  } else {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    document.querySelector('#current--1').textContent = 0;
    currentScorePlayer2 = 0;
  }
}

rollDicePress.addEventListener('click', diceRoll);
holdPress.addEventListener('click', hold);
newGamePress.addEventListener('click', reset);

// console.log(currentScorePlayer1);

// document.querySelector('.dice').style.display = 'block';
