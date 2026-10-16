'use strict';

// Зберігання у масиві та пошук через цикл for
const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Artem', phone: '+380501234567' },
];

const findPhoneByName = (name) => {
  for (const item of phonebook) {
    if (item.name === name) {
      return item.phone;
    }
  }
};

// Зберігання у хеш-таблиці (об'єкт) та пошук за ключем
const phonebookHash = {
  'Marcus Aurelius': '+380445554433',
  'Artem': '+380501234567',
};

const findPhoneByNameHash = (name) => phonebookHash[name];

console.log('findPhoneByName:', findPhoneByName('Artem'));
console.log('findPhoneByNameHash:', findPhoneByNameHash('Marcus Aurelius'));