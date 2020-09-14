const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  
  return arr[0];
};

assertEqual(head([8,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");