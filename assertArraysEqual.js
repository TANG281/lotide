// Comparing 2 arrays
// If their length are different -> return false
// If they have the same length, iterate through each element of the first array and compare it to the same one on the second array
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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['a', 'b', 'c'], ['A', 'b', 'c']);
assertArraysEqual([1, 2, 3], [1, 3, 2]);
assertArraysEqual(['WOrd'], ['Word']);