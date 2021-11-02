
const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");

assertArraysEqual([2], middle([1, 2, 3])); 
assertArraysEqual([3], middle([1, 2, 3, 4, 5]));
assertArraysEqual([1], middle([1])); 
assertArraysEqual([], middle([1, 2]));
assertArraysEqual([3], middle([1, 2, 3, 4]));