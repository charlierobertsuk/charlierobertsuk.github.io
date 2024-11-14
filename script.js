'use strict';

const diceEl = document.querySelector(`.dice`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const btnNew = document.querySelector(`.btn--new`);
const btnHow = document.querySelector(`.btn--how`);
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`); // querySelector only selects the first one
const btnOpenModal = document.querySelectorAll(`.show-modal`);
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
let scores, currentScore, activePlayer, playing;

const reset = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};

const diceRoll = function () {
  const roll = Math.trunc(Math.random() * 6) + 1;
  return roll;
};

const switchPlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

const winState = function () {
  playing = false;
  diceEl.classList.add(`hidden`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--winner`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--active`);
};

btnRoll.addEventListener(`click`, function () {
  if (playing === true) {
    const dice = diceRoll();
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing === true) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if (scores[activePlayer] >= 100) {
      winState();
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, function () {
  reset();
});

btnHow.addEventListener(`click`, function () {
  console.log(btnOpenModal);
  openModal();
  btnCloseModal.addEventListener(`click`, closeModal);
  overlay.addEventListener(`click`, closeModal);

  // e (event) is the object of what key was pressed
  document.addEventListener(`keydown`, function (e) {
    //console.log(e.key);
    if (e.key === `Escape` && !modal.classList.contains(`hidden`)) closeModal();
  });
});

reset();
