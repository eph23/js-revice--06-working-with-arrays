'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);

// Slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// Splice method
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];

// Reverse method
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// Concat method
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join method
console.log(letters.join(' - '));
