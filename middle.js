const { eqArrays } = require('./eqArrays');
const { assertArraysEqual } = require('./assertArraysEqual');

// MIDDLE function
// Check the input array length. Array with 2 elements or less will return an empty result array, function terminate
// For array with more than 2 elements, there will be 2 scenarios
// array length is an even number -> push 2 middle elements to the result array
// array length is an odd number -> push 1 middle emelemt to the result array
const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  } else {
    if (array.length % 2 === 0) {
      result.push(array[array.length / 2 - 1]);
      result.push(array[array.length / 2]);
    } else {
      result.push(array[Math.floor(array.length / 2)]);
    }
  }
  return result;
};

// Test function MIDDLE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


