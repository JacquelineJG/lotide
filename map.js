//Our map function will take in two arguments:

// 1. An array to map
// 2. A callback function
//The map function will return a new array based on the results of the callback function.
const assertArraysEqual = require('./assertArraysEqual');


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"]; 

const results1 = map(words, word => word[2]);
console.log(results1);
assertArraysEqual(results1, [ 'o', 'n', undefined, 'j', 'm' ])



module.exports = map;