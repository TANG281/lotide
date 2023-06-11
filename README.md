# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chibeo/lotide`

**Require it:**

`const _ = require('@chibeo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: assert function for comparing 2 arrays
* `assertEqual`: assert function for comparing 2 primitive variables
* `assertObjectsEqual`: assert function for comparing 2 objects
* `countLetters`: take in a string and return a count for each of the letter appreared in that string, ignoring spaces
* `countOnly`: take in a collection of items and return the counts for a specific subset of those items
* `eqArrays`: comparing 2 arrays
* `eqObjects`: comparing 2 objects
* `findKey`: take in an object and a callback function and return the first key for which the callback returns a truthy value
* `findKeyByValue`: take in an object and a value and return the first key which contain the given value
* `flatten`: take in an array with nested arrays and return a flattened version of that array
* `head`: return the first item in an array
* `letterPositions`: take in an array and return all the indices in the string where each character is found
* `map`: take in an array and a callback function and return a new array based on the result of the callback
* `middle`: return the middle-most item(s) of an array
* `tail`: return everything except for the first item of an array
* `takeUntil`: take in an array and a callback function and return a slice of the array taken from the begining until the callback function return a truthy value
* `without`: return a new array with only elements from source array that are not included in itemsToRemove array