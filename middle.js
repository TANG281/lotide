// Comparing 2 arrays
// If their length are different -> return false
// If they have the same length, iterate through each element of the first array and compare it to the same one on the second array
// Iteration stops when result is fasle and continue if it is true
const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
    return result;
  } else {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] !== array2[x]) {
        result = false;
        return result;
      } else {
        result = true;
      }
    }
    return result;
  }
};

// Test code for arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


