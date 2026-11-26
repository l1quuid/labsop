'use strict';

const seq = (...fns) => {
  const chain = (x) => {
    if (typeof x === 'function') return seq(...fns, x);
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
  return chain;
};

console.log(seq(x => x + 7)(x => x * 2)(5)); // 17
console.log(seq(x => x * 2)(x => x + 7)(5)); // 24
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); // 3