// Comparing 2 arrays
// If their length are different -> return false
// If they have the same length, iterate through each element of the first array and compare it to the same one on the second array
// Iteration stops when result is fasle and continue if it is true
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

module.exports = eqArrays;