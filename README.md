# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jacquelinejg/lotide`

**Require it:**

`const _ = require('@jacquelinejg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function assertArraysEqual (paramOne, paramTwo)`: Utilizes the eqArray function to compare two arrays and assert that they are or are not equal.
* `assertEqual = function(actual, expected)`: prints to the console when an expected outcome is not met (fails) so that we can look into why. Works on primitive data.
* `assertObjectsEqual = function(actual, expected)`: Evaluates objects with the help of eqObjects funtion to console.log a message to assert if the objects pass or fail the expected test.
* `countLetters = function(string)`: Takes in a string and returns a tally count of each of the letters in that sentence.
* `countOnly = function(allItems, itemsToCount)`: Takes in a collection of items and returns the counts for a specific subset of those items.
* `function eqArrays(arrOne, arrTwo)`: Compares the contents of two arrays to find the perfect match.
* `eqObjects = function(object1, object2)`: Takes in two objects and returns true or false, based on a whether the objects match.
* `findKey = (obj, check)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
* `function findKeyByValue(object, value)`: Searches for a key in an object where the value matches a given value.
* `head = function(arr)`: Returns the first element from the array.
* `letterPositions = function(sentence)`: Returns all of the index positions in the string where each character is found.
* `map = function(array, callback)`: Returns a new array based on the results of the callback function implimented.
* `middle = function(arr)`: Returns the middle number of an array with an odd length, and the middle two numbers of an array with an even length.
* `tail = function(arr)`: Returns the tail of an array.
* `takeUntil = function(array, callback)`: Collects items from a provided array until the callback provided returns a truthy value.
* `without (source, itemsToRemove)`: Returns a subset of a given array after removing the unwanted elements.