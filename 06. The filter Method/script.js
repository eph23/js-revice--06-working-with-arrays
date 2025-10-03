'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// filter method
const deposits = movements.filter(movement => {
  return movement > 0;
});
console.log(deposits);

const depositsMove = [];
for (const movement of movements) {
  if (movement > 0) {
    depositsMove.push(movement);
  }
}
console.log(depositsMove);

const withdrawals = movements.filter(movement => {
  return movement < 0;
});
console.log(withdrawals);
