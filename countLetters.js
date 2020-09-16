const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let obj ={};
  let newString =  string.split(" ").join("");
  for(let letter of newString)if(!obj[letter])obj[letter] = 1;else obj[letter] = obj[letter]  + 1;
  console.log(obj)
  return obj
}

countLetters("lighthouse in the house")