// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');
// // Check flatten function
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten(['nice', 'TGIF', [3, 4], 'Long weekend', [6]]), ['nice', 'TGIF', 3, 4, 'Long weekend', 6]);

const assert = require('chai').assert;
const { flatten } = require('../index');

describe('#flatten', () => {
  it("return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const output = flatten([1, 2, [3, 4], 5, [6]]);
    const expect = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(output, expect);
  });
  it("return ['nice', 'TGIF', 3, 4, 'Long weekend', 6] for ['nice', 'TGIF', [3, 4], 'Long weekend', [6]]", () => {
    const output = flatten(['nice', 'TGIF', [3, 4], 'Long weekend', [6]]);
    const expect = ['nice', 'TGIF', 3, 4, 'Long weekend', 6];
    assert.deepEqual(output, expect);
  });
});