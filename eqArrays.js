const assertEqual = require("./assertEqual");

const eqArrays = function (arr1, arr2) {
    console.log(arr1);
    console.log(arr2);
    
    if (arr1.length !== arr2.length){
        return false;
    } else if(arr1.length === 0 && arr2.length === 0){
        return true;
    }
    
    else if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
            else {
                return true;
            }
        }
    }
};


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

module.exports = eqArrays;