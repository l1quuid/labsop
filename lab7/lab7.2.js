'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
removeElements(nums, 5, 1, 6);
console.log(nums); // [2, 3, 4, 7]

const cities = ['Kiev', 'Beijing', 'Lima', 'Seoul'];
removeElements(cities, 'Lima', 'Berlin', 'Kiev');
console.log(cities); // ['Beijing', 'Seoul']