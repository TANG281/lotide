const { assertEqual } = require('./assertEqual');

// Implement the function findKey which takes in an object and a callback.
// It should scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key]))
      return key;
  }
  return undefined;
};

// Test code

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

const carManufacturerOrigin = {
  toyota: 'Japan',
  honda: 'Japan',
  jeep: 'USA',
  gmc: 'USA',
  bmw: 'Germany',
  mercedes: 'Germany',
  vinfast: 'Vietnam',
  volvo: 'Sweden'
};
assertEqual(findKey(carManufacturerOrigin, x => x === 'Japan'), 'toyota');