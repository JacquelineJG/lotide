//const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  let obj ={};
  let newString =  string.split(" ").join("");
  for(let letter of newString)if(!obj[letter])obj[letter] = 1;else obj[letter] = obj[letter]  + 1;
  console.log(obj)
  return obj
}

 module.exports = countLetters;