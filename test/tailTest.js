const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns Lighthouse Labs is Lighthouse Labs", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns two three", () => {
    assert.deepEqual(tail(['one', 'two', 'three']), ['two', 'three']); 
  });
});