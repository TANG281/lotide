const { assertArraysEqual } = require('../assertArraysEqual');
// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['a', 'b', 'c'], ['A', 'b', 'c']);
assertArraysEqual([1, 2, 3], [1, 3, 2]);
assertArraysEqual(['WOrd'], ['Word']);
