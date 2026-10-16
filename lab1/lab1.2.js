'use strict';

const items = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  42, 'JavaScript', null, undefined, { a: 1 }, Symbol('id'), 3.14, BigInt(100)
];

const typeCounts = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  symbol: 0,
  bigint: 0,
};

for (const item of items) {
  const type = typeof item;
  if (type in typeCounts) {
    typeCounts[type]++;
  }
}

console.dir(typeCounts);