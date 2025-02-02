//THIS FUNCTION WORKS FINE, OTHER ONE IS CLEANER
/* 
const takeUntil = function(array, callback) {
  let emptyArr = [];
  for (let i = 0; i < array.length; i++){
    if (callback(array[i])) {
      break;
    } else if (!callback(array[i])){
      emptyArr.push(array[i])
    }
  }return emptyArr;
} */

//const assertArraysEqual = require('./assertArraysEqual');


const takeUntil = function(array, callback) {
  let emptyArr = [];
  for (let i of array) {
    if (!callback(i)){
      emptyArr.push(i)
    } else {
        break;
      }
  } return emptyArr;
}

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
assertArraysEqual([1, 2, 5, 7, 2], results1)

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

assertArraysEqual(["I've", "been", "to", "Hollywood"], results2)
*/
module.exports = takeUntil;