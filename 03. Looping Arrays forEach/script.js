'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(`===for..of===`);
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${index + 1} You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`${index + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('===forEach===');
movements.forEach(function (movement, index) {
  if (movement > 0) {
    console.log(`${index + 1} You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});
