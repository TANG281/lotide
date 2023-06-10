// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// // Test function MIDDLE
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

const assert = require('chai').assert;
const { middle } = require('../index');

describe('#middle', () => {
  it("return [] for [1]", () => {
    const output = middle([1]);
    const expect = [];
    assert.deepEqual(output, expect);
  });
  it("return [] for [1, 2]", () => {
    const output = middle([1, 2]);
    const expect = [];
    assert.deepEqual(output, expect);
  });
  it("return [2] for [1, 2, 3]", () => {
    const output = middle([1, 2, 3]);
    const expect = [2];
    assert.deepEqual(output, expect);
  });
  it("return [2, 3] for [1, 2, 3, 4]", () => {
    const output = middle([1, 2, 3, 4]);
    const expect = [2, 3];
    assert.deepEqual(output, expect);
  });
});