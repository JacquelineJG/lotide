const eqArrays = require('./eqArrays');


function assertArraysEqual (paramOne, paramTwo) {
  if (eqArrays(paramOne, paramTwo)){
    console.log(`✅✅✅ Assertion passed: ${paramOne} === ${paramTwo}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${paramOne} !== ${paramTwo}`)
  } 
}


module.exports = assertArraysEqual;





