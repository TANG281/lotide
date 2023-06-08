const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

// Assert object test function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// // Test code
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertObjectsEqual(shirtObject, anotherShirtObject);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

module.exports = assertObjectsEqual;