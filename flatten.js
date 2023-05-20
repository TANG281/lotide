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

// FLATTEN function
const flatten = function(array) {
  let result = [];
  // loop through the array and check if each element is an array
  for (let i = 0; i < array.length; i++) {
    // if it is, loop through that element and add each item to the result array
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
    // if it isn't, add that element to the result array
      result.push(array[i]);
    }
  }
  // return the result array, function terminate
  return result;
};

// Check flatten function
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['nice', 'TGIF', [3, 4], 'Long weekend', [6]]), ['nice', 'TGIF', 3, 4, 'Long weekend', 6]);