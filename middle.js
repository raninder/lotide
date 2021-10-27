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
    let message = " ";
    if (flag) {
        message =`Assertion Passed: ${arr1} === ${arr2}`;
    }
    else {
        console.log("assertion failed", arr1, "===", arr2);
    }
    return message;
}  

const middle = function(arr) {
    let len = parseInt((arr.length)/2);
    let newArr = [];

    if(arr.length > 2 ) {
        if(arr.length % 2 === 0){
            newArr.push(arr[len-1]);
            newArr.push(arr[len]);
        }
        else {
        newArr.push(arr[len]);
        }
    }    
    return newArr;
};

console.log(assertArraysEqual([1,2,3],middle([1, 2, 3]))); // => [2]
console.log(assertArraysEqual([1,2,3,4,5],middle([1, 2, 3, 4, 5])));
console.log(assertArraysEqual([1],middle([1]))); // => []
console.log(assertArraysEqual([1,2],middle([1, 2])));
console.log(assertArraysEqual([1,2,3,4],middle([1, 2, 3, 4]))); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6]));