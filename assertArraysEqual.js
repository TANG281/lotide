const { eqArrays } = require('./eqArrays');

// Assert array test function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(['a', 'b', 'c'], ['A', 'b', 'c']);
// assertArraysEqual([1, 2, 3], [1, 3, 2]);
// assertArraysEqual(['WOrd'], ['Word']);

module.exports = { assertArraysEqual };