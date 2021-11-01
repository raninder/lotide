// const assertEqual = function(actual, expected) {
// if(actual === expected){
//     console.log("\uD83D\uDE00"+"Assertion Passed: " +`${actual}`+ " === "+`${expected}`);
// }
// else {
//     console.log("Assertion Failed: " +`${actual}`+ " !== "+`${expected}`);
// }
// };
const assertEqual = require('./assertEqual');
const head = function(arr){
    let ele = arr.shift();
    return ele;
}

// TEST CODE

// assertEqual(head([5,6,7]), 5);
// assertEqual(head([5]), 5);
// assertEqual(head([]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//Assertion Failed: Lighthouse Labs !== Bootcamp
//Assertion Passed: 1 === 1

module.exports = head;