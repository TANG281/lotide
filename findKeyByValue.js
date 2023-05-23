// Assert test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// takes in an object and a value
// scan the object and return the FIRST key which contains the given value
// If no key with that given value is found, then it should return undefined
const findKeyByValue = function(object, value) {
  let keyList = Object.keys(object).reverse();
  let result = undefined;
  for (const key of keyList) {
    if (object[key] === value)
      result = key;
  }
  return result;
};


// Test code

console.log('Test 1');
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log('Test 2');
const carManufacturerOrigin = {
  toyota: 'Japan',
  jeep: 'USA',
  bmw: 'Germany',
  mercedes: 'Germany',
  vinfast: 'Vietnam',
  volvo: 'Sweden'
};

assertEqual(findKeyByValue(carManufacturerOrigin, 'Vietnam'), 'vinfast');
assertEqual(findKeyByValue(carManufacturerOrigin, 'Germany'), 'bmw');
assertEqual(findKeyByValue(carManufacturerOrigin, 'Korea'), undefined);