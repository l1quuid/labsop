'use strict';

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Artem' };

  obj1.name = 'Marcus Aurelius';
  obj2.name = 'Artem Aurelius';

  
  // obj1 = { name: 'Marcus Aurelius Jonapart'}; // Буде помилка, бо не можна змінювати значення константи
  obj2 = { name: 'Artem Aurelius Jonapart' };  

  console.dir(obj1);
  console.dir(obj2);
};

const createUser = (name, city) => ({ name, city });

fn();
console.dir(createUser('Marcus Aurelius', 'Roma'));