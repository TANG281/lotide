// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test 2
// const lunch = ['Mac n Cheese', 'Soup', 'Gimbap'];
// const test1 = tail(lunch)
// assertEqual(test1[0], 'Soup');
// assertEqual(test1[1], 'Gimbap');

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const output = tail(['Hello', 'Lighthouse', 'Labs']);
    const expect = ['Lighthouse', 'Labs'];
    assert.deepEqual(output, expect);
  });
  it("return ['Soup', 'Gimbap'] for ['Mac n Cheese', 'Soup', 'Gimbap']", () => {
    const output = tail(['Mac n Cheese', 'Soup', 'Gimbap']);
    const expect = ['Soup', 'Gimbap'];
    assert.deepEqual(output, expect);
  });
  it("return [] for [1]", () => {
    const output = tail([1]);
    const expect = [];
    assert.deepEqual(output, expect);
  });
  it("return [] for []", () => {
    const output = tail([]);
    const expect = [];
    assert.deepEqual(output, expect);
  });
})