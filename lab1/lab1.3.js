'use strict';

const items = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  42, 'JavaScript', null, undefined, { a: 1 }, Symbol('id'), 3.14, BigInt(100)
];

const typeCounts = {};

for (const item of items) {
  const type = typeof item;
  typeCounts[type] = (typeCounts[type] || 0) + 1;
}

console.dir(typeCounts);