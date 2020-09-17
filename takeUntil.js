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

function eqArrays(arrOne, arrTwo) {
  return Array.isArray(arrOne) &&
    Array.isArray(arrTwo) &&
    arrOne.length === arrTwo.length &&
    arrOne.every((val, index) => val === arrTwo[index]);
}


function assertArraysEqual (paramOne, paramTwo) {
  if (eqArrays(paramOne, paramTwo)){
    console.log(`✅✅✅ Assertion passed: ${paramOne} === ${paramTwo}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${paramOne} !== ${paramTwo}`)
  } 
}


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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
assertArraysEqual([1, 2, 5, 7, 2], results1)

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

assertArraysEqual(["I've", "been", "to", "Hollywood"], results2)