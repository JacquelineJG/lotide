const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [23, 2, 3]);
assertArraysEqual([4, 2], [4, 2]);

