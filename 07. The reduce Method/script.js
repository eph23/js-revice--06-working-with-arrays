'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// reduce method
const balance = movements.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(balance);

let balanceMove = 0;
for (const movement of movements) {
  balanceMove += movement;
}
console.log(balanceMove);

const max = movements.reduce((acc, current) => {
  if (acc > current) {
    return acc;
  } else {
    return current;
  }
}, movements[0]);

console.log(max);
