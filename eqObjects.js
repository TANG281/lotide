const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Object comparison function
const eqObjects = function(object1, object2) {
  const keyList1 = Object.keys(object1);
  const keyList2 = Object.keys(object2);
  if (keyList1.length !== keyList2.length) {
    return false;
  } else {
    for (const key of keyList1) {
      if (!object2[key]) {
        return false;
      } else if (Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key]))
          return false;
      } else if (object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;
};


// // Test code with primitives as values
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

// // Test code with arrays as values
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

module.exports = eqObjects;