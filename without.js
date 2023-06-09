const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// WITHOUT function - return a NEW array with only elements from source array that are not included in itemsToRemove array
const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

// assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
// assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;