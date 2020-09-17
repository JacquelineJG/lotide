const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


/*
const findKey = function(obj, check) => {

  for (let i = 0; i < array.length; i++){
    if (callback(array[i])) {
      break;
    } else if (!callback(array[i])){
      emptyArr.push(array[i])
    }
  }return emptyArr;
} 
*/



const findKey = (obj, check) => {
  for (key in obj) {
    if(check(obj[key])) {
      return key;
    }
  }
  return null;
} 

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(obj, x => x.stars === 2), 'noma');

let potato = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) 

console.log(potato)