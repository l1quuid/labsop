'use strict';

const sum1 = (...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};

const sum2 = (...args) => {
  let result = 0;
  for (const value of args) {
    result += value;
  }
  return result;
};

const sum3 = (...args) => {
  let result = 0;
  let i = 0;
  while (i < args.length) {
    result += args[i];
    i++;
  }
  return result;
};

const sum4 = (...args) => {
  let result = 0;
  let i = 0;
  if (args.length === 0) return result;
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  return result;
};

// 5. reduce
const sum5 = (...args) => args.reduce((acc, value) => acc + value, 0);

console.log(sum1(1, 2, 3)); // 6
console.log(sum2(0));       // 0
console.log(sum3());        // 0
console.log(sum4(1, -1, 1)); // 1
console.log(sum5(10, -1, -1, -1)); // 7