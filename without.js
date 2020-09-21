
//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))
const assertArraysEqual = require('./assertArraysEqual');

function without (source, itemsToRemove) {
  let filtered = source.filter(function(e) { 
      
      return itemsToRemove.indexOf(e) === -1})
return filtered;
}


const words = ["hello", "world", "lighthouse"];
let results = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(results);

module.exports = without;