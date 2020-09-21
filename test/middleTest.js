/*const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
*/

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns 3 from [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3); 
  });
});