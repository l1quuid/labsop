'use strict';

const checkType = (value, type) =>
  value !== undefined && value !== null && value.constructor === type;

const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  return (...args) => {
    for (let i = 0; i < argTypes.length; i++) {
      if (!checkType(args[i], argTypes[i])) {
        throw new TypeError(
          `Argument ${i + 1}: expected ${argTypes[i].name}`
        );
      }
    }

    const result = fn(...args);

    if (!checkType(result, resultType)) {
      throw new TypeError(`Result: expected ${resultType.name}`);
    }
    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3)); // 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!'));

try {
  addNumbers(2, '3'); // TypeError: Argument 2: expected Number
} catch (e) {
  console.log(e.message);
}