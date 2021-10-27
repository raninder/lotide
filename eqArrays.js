const eqArrays = function ( arr1, arr2){
    let flag = false;
    console.log(arr1);
    console.log(arr2);
    if(arr1.length === arr2.length){
        for (let i = 0;i < arr1.length; i++){
            if (arr1[i] === arr2[i]) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
    }
    return flag;
    
};
//console.log(eqArrays([1, 2, 3], [3, 2, 1]));

const assertEqual = function(actual, expected) {
if(actual === expected){
    console.log("\uD83D\uDE00"+"Assertion Passed: " +`${actual}`+ " === "+`${expected}`);
}
else {
    console.log("Assertion Failed: " +`${actual}`+ " !== "+`${expected}`);
}
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
