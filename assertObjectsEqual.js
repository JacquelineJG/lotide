// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion passed:${inspect(actual)} === ${inspect(expected)}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
    
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "3" };
assertObjectsEqual(ab, ba); // => true

module.exports = assertObjectsEqual;

