function eqArrays(arrOne, arrTwo) {
  return Array.isArray(arrOne) &&
    Array.isArray(arrTwo) &&
    arrOne.length === arrTwo.length &&
    arrOne.every((val, index) => val === arrTwo[index]);
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keysPlease = 0, key;
  for (key in object1) {
      if (object1.hasOwnProperty(key)) keysPlease++;
  }

  let pleaseKeys = 0, key2;
  for (key2 in object2) {
      if (object2.hasOwnProperty(key2)) pleaseKeys++;
  }

  if (keysPlease !== pleaseKeys) {
    return false;
  }

  for (key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
      let truth = eqArrays(object1[key], object2[key])
      if (!truth){
        return false
      }
      
    }
    // If values of same property are not equal,
    // objects are not equivalent
    else if (object1[key] !== object2[key]) {
        return false;
    }
    
  }
  return true;
// If we made it this far, objects
// are considered equivalent
};

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


