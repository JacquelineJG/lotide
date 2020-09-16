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

const middle = function(arr) {
  //will need to push found middle elements into new empty array
  let middleOfArray = [];
  //need to loop through array, find length, and see if length is even or odd.
  //if length is 1 or 2, it does not return anything
  //if length is odd, it returns the center number
  //if length is even, it returns two most center numbers
  
    const midOdd = Math.floor(arr.length / 2)
    const midEvenFirst = Math.floor(arr.length / 2);
    
    const midEvenSecond = Math.floor((arr.length /2)+1)
    
    
    if (arr.length === 1 || arr.length === 2){
      middleOfArray = [];
    } else if (arr.length % 2 !== 0){
      middleOfArray = arr[midOdd]
    } else if (arr.length % 2 === 0){
      middleOfArray = [midEvenFirst, midEvenSecond]
    }
   return middleOfArray
}
console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
