//To find middle element of an array. If no. of elements even, return two middle elements.

const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const middle = function (arr) {
    let len = parseInt((arr.length) / 2);
    let newArr = [];
    if (arr.length <= 2) {
        return [];
    }
    else {
        if (arr.length % 2 === 0) {
            newArr.push(arr[len - 1]);
            newArr.push(arr[len]);
        }
        else {
            newArr.push(arr[len]);
        }
    }
    return newArr;
};

// (assertArraysEqual([1, 5, 3], middle([1, 5, 3]))); // => [5]
// console.log(assertArraysEqual([2], middle([1, 2, 3]))); // => [2]
// console.log(assertArraysEqual([3], middle([1, 2, 3, 4, 5])));
// console.log(assertArraysEqual([1], middle([1]))); // => []
// console.log(assertArraysEqual([], middle([1, 2])));
// console.log(assertArraysEqual([3], middle([1, 2, 3, 4]))); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6]));

//console.log(eqArrays([],[]));

module.exports = middle;