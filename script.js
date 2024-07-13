'use strict';

const diceDisplay = document.querySelectorAll(`.dice`); // now change dice display

const diceRoll = function () {
  const roll = Math.trunc(Math.random() * 6) + 1;
  return roll;
};

//for (let i = 0; i < )
