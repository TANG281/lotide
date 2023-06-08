const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// FLATTEN function
// loop through the array and check if each element is an array
// if it is, loop through that element and add each item to the result array
// if it isn't, add that element to the result array
const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

// Check flatten function
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['nice', 'TGIF', [3, 4], 'Long weekend', [6]]), ['nice', 'TGIF', 3, 4, 'Long weekend', 6]);