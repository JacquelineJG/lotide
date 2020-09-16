const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);