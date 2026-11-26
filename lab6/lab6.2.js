'use strict';

const compose = (...fns) => {
  const handlers = [];

  const f = (x) => {
    try {
      let res = x;
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (e) {
      for (const handler of handlers) handler(e);
      return undefined;
    }
  };

  f.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
    return f;
  };

  return f;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const bad = () => { throw new Error('Something went wrong'); };

const f = compose(inc, twice, cube);
console.log(f(5)); // inc(twice(cube(5))) = 251

const g = compose(inc, bad, twice);
g.on('error', e => console.log('Caught:', e.message));
console.log(g(3)); // Caught: Something went wrong, потім undefined