// const assertEqual = require('../assertEqual');
// const head = require('../head');
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const { head } = require('../index');

describe('#head', () => {
  it("return 1 for [1, 2, 3]", () => {
    const output = head([1, 2, 3]);
    const expect = 1;
    assert.strictEqual(output, expect);
  });
  it("return '5' for ['5']", () => {
    const output = head(['5']);
    const expect = '5';
    assert.strictEqual(output, expect);
  });
  it("return 5 for [5, 6, 7]", () => {
    const output = head([5, 6, 7]);
    const expect = 5;
    assert.strictEqual(output, expect);
  });
  it("return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const output = head(['Hello', 'Lighthouse', 'Labs']);
    const expect = 'Hello';
    assert.strictEqual(output, expect);
  });
});