'use strict';

const inc = (n) => ++n;

const a = 5;
const b = inc(a);
console.dir({ a, b });

const incObj = (num) => {
  if (num && typeof num === 'object') {
    num.n += 1;
  }
};

const obj = { n: 5 };
incObj(obj);
console.dir(obj);