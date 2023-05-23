// Assert test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
      } else if (Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key]))
          result = false;
      } else if (object2[key] !== object1[key]) {
        result = false;
      }
    }
  }
  return result;
};


// Test code with primitives as values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

// Test code with arrays as values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false