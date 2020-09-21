//const assertArraysEqual = require('./assertArraysEqual');

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
/*
console.log(letterPositions("hello hi"))
assertArraysEqual(letterPositions("hello").e, [1]);
*/
module.exports = letterPositions;