const { assertEqual } = require('./assertEqual');

// This function should take in a collection of items
// return counts for a specific subset of those items
// It won't count everything
// In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others
// Items in our case will be limited to Strings

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }
    if (!results[item]) {
      results[item] = 0;
    }
    results[item] += 1;
  }
  return results;
};



// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

const inspect = require('util').inspect;
console.log(inspect(result1));
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);