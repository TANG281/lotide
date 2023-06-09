const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Take in two parameters:
//  1. The array to work with
//  2. The callback function
// The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  let output = [];
  for (let x = 0; x < array.length; x++) {
    output.push(array[x]);
    if (callback(array[x + 1])) return output; // The code will stop BEFORE callback function is truthy
  }
};

// // Test code
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;