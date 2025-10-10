'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// x.fill(1);
x.fill(23, 3, 6);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

