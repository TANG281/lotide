// Array comparison function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x])
      return false;
    }
  
  return true;
};

// Assert array test function
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