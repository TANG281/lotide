// Array comparison function
const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  } else {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] !== array2[x])
        result = false;
    }
  }
  return result;
};

// Object comparison function
const eqObjects = function(object1, object2) {
  const keyList1 = Object.keys(object1);
  const keyList2 = Object.keys(object2);
  let result = true;
  if (keyList1.length !== keyList2.length) {
    result = false;
  } else {
    for (const key of keyList1) {
      if (!object2[key]) {
        result = false;
      } else if (Array.isArray(object2[key]) === true) {
        if (eqArrays(object1[key], object2[key]) === false)
          result = false;
      } else if (object2[key] !== object1[key]) {
        result = false;
      }
    }
  }
  return result;
};

// Assert object test function

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// Test code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);