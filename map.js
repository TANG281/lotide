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

// Assert array test function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Our map function will take in two arguments:
//  - An array to map
//  - A callback function
// The map function will return a new array based on the results of the callback function.

const words = ['currently', 'in', 'week', 'two'];

// Personal map function
const map = function(array, callbackFn) {
  const results = [];
  for (let item of array) {
    results.push(callbackFn(item));
  }
  return results;
};

const result1 = map(words, word => word[0]);
console.log(result1);

// Test code

console.log('Test 1');
const videogames = [
  {name: 'Final Fantasy IX', genre: 'RPG'},
  {name: 'Diablo IV', genre: 'RPG'},
  {name: 'Grounded', genre: 'Survival'},
  {name: 'Don\'t starve', genre: 'Survival'},
  {name: 'Halo Infinite', genre: 'FPS'}
];
const testResult1 = map(videogames, game => game.genre);
assertArraysEqual(testResult1, ['RPG', 'RPG', 'Survival', 'Survival', 'FPS']);

console.log('Test 2');
const numbers = [2, 3, 4, 5, 6, 7];
const testResult2 = map(numbers, num => num * 2 + 1);
assertArraysEqual(testResult2, [5, 7, 9, 11, 13, 15]);

console.log('Test 3');
const string = ['a', 'b', 'c'];
const testResult3 = map(string, item => `${item} is at index ${string.indexOf(item)}`);
assertArraysEqual(testResult3, ['a is at index 0', 'b is at index 1', 'c is at index 2']);