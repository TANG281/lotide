const assertEqual = require('./assertEqual')

// The function should take in a sentence (as a string)
// then return a count of each of the letters in that sentence

const countLetters = function(sentence) {
  let result = {};
  for (const letter of sentence) {
    if (letter === ' ') {
    continue;
    }
    
    if (!result[letter]) {
        result[letter] = 0;
    }
     
    result[letter] += 1;
  }
  return result;
};

//Test code
const inspect = require('util').inspect;

let test1 = countLetters('lighthouse in the house');
console.log(inspect(test1));
assertEqual(test1['l'], 1);
assertEqual(test1['i'], 2);
assertEqual(test1['g'], 1);
assertEqual(test1['h'], 4);
assertEqual(test1['t'], 2);
assertEqual(test1['o'], 2);
assertEqual(test1['u'], 2);
assertEqual(test1['s'], 2);
assertEqual(test1['e'], 3);
assertEqual(test1['n'], 1);

console.log('--------------');

let test2 = countLetters('test string');
console.log(inspect(test2));
assertEqual(test2['t'], 3);
assertEqual(test2['e'], 1);
assertEqual(test2['s'], 2);
assertEqual(test2['r'], 1);
assertEqual(test2['i'], 1);
assertEqual(test2['n'], 1);
assertEqual(test2['g'], 1);

module.exports = countLetters;