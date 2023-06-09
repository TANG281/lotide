const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// return all the indices (zero-based positions) in the string where each character is found
// For each letter, multiple numbers may be needed to represent all the places in the string that it shows up

const letterPositions = function(sentence) {
  let result = {};
  for (let i in sentence) {
    let letter = sentence[i];

    if (letter === ' ') {
      continue;
    }

    if (!result[letter]) {
      result[letter] = [];
    }
    
    result[letter].push(Number(i));
  }
  return result;
};


// Test code
const inspect = require('util').inspect;

const test1 = letterPositions('hello');
console.log(inspect(test1));
// h: [0], e: [1], l: [2, 3], o: [4]
assertArraysEqual(test1['h'], [0]);
assertArraysEqual(test1['e'], [1]);
assertArraysEqual(test1['l'], [2, 3]);
assertArraysEqual(test1['o'], [4]);

console.log('-------------------------------------------------------');

const test2 = letterPositions('web developement');
console.log(inspect(test2));
// w: [0], e: [1, 5, 7, 11, 13], b: [2], ' ': [ 3 ], d: [4], v: [6], l: [8], o: [9], p: [10], m: [12], n: [14], t: [15]
assertArraysEqual(test2['w'], [0]);
assertArraysEqual(test2['e'], [1, 5, 7, 11, 13]);
assertArraysEqual(test2['b'], [2]);
assertArraysEqual(test2['d'], [4]);
assertArraysEqual(test2['v'], [6]);
assertArraysEqual(test2['l'], [8]);
assertArraysEqual(test2['o'], [9]);
assertArraysEqual(test2['p'], [10]);
assertArraysEqual(test2['m'], [12]);
assertArraysEqual(test2['n'], [14]);
assertArraysEqual(test2['t'], [15]);

module.exports = letterPositions;