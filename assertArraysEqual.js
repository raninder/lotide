
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


function assertArraysEqual( arr1, arr2) {
    let flag = eqArrays(arr1,arr2);
    
    if (flag) {
        console.log(`Assertion Passed: ${arr1} === ${arr2} `);
    }
    else {
        console.log(`Assertion Failed: ${arr1} === ${arr2} `);
    }
}    

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, "1"]);
