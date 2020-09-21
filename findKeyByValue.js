//const assertEqual = require('./assertEqual');

function findKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const whoIsTheVampire = { 
  Edward: "Vampire",
  Bella: "Human",
  Jacob:  "Werewolf"
};

/*
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(whoIsTheVampire, "Vampire"), "Edward");
assertEqual(findKeyByValue(whoIsTheVampire, "Human"), "Bella");
*/
module.exports = findKeyByValue;