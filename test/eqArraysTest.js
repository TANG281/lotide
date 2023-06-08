const { assertEqual } = require('../assertEqual');
const { eqArrays } = require('../eqArrays')

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["a", "2", "3"], ["A", "2", "3"]), false);
assertEqual(eqArrays([11, 222, 333], [11, 222, 333]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], 1), false);