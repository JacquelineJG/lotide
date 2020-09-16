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

const letterPositions = function(sentence) {
  let results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' '){
      if (!results[letter]) {
        results[letter] = [i]
      } else {
        results[letter].push(i)
      }
    }   
  }
  return results;
};
console.log(letterPositions("hello hi"))
assertArraysEqual(letterPositions("hello").e, [1]);