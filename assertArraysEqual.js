
const eqArrays = require("./eqArrays");

function assertArraysEqual( arr1, arr2) {
    let flag = eqArrays(arr1,arr2);
    
    if (flag) {
        console.log(`Assertion Passed: ${arr1} === ${arr2} `);
    }
    else {
        console.log(`Assertion Failed: ${arr1} === ${arr2} `);
    }
}    

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, "1"]);

module.exports = assertArraysEqual;