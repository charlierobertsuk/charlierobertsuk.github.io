'use strict';

const diceDisplay = document.querySelector(`.dice`);
const diceRoleBtn = document.querySelector(`.btn--roll`);
const holdBtn = document.querySelector(`.btn--hold`);
let p1Total = document.getElementById(`score--0`).nodeValue;
let p1Current = document.getElementById(`current--0`).nodeValue;
let p2Total = document.getElementById(`score--1`).nodeValue;
let p2Current = document.getElementById(`current--1`).nodeValue;

/* p1Current.textContent = 0;
p1Total.textContent = 0;
p2Current.textContent = 0;
p2Total.textContent = 0; */
diceDisplay.classList.add(`hidden`);

const diceRoll = function () {
  const roll = Math.trunc(Math.random() * 6) + 1;
  return roll;
};

const playerSwitch = function () {
  console.log(`Next Player`);
};

diceRoleBtn.addEventListener(`click`, function () {
  const currentRole = diceRoll();
  p1Current += currentRole;
  console.log(p1Current);
  if (currentRole === 1) {
    console.log(`Next Player`);
  } else {
    document.getElementById(`current--0`).textContent = p1Current;
  }
});

holdBtn.addEventListener(`click`, function () {
  console.log(`Next Player`);
  p1Total = p1Current;
  document.getElementById(`score--0`).textContent = p1Total;
});
