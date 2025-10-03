'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// map method
const euroToUsd = 1.1;
const movementsUsd = movements.map(function (movement) {
  return movement * euroToUsd;
});

const movementsUsdArr = movements.map(movement => movement * euroToUsd);

console.log(movements);
console.log(movementsUsd);
console.log(movementsUsdArr);

const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * euroToUsd);
}
console.log(movementsUsdFor);

/* const movementsDescription = movements.map((movement, i) => {
  if (movement > 0) {
    return `Movement ${i + 1}: You deposited ${movement}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`;
  }
}); */

const movementsDescription = movements.map(
  (movement, i) =>
    `Movement ${i + 1}: You ${
      movement > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(movement)}`
);
console.log(movementsDescription);
