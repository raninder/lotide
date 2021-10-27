
function eqArrays( arr1, arr2) {
    let flag = false;
    
    if(arr1.length === arr2.length) {
        for (let i = 0;i < arr1.length; i++){
            if (arr1[i] === arr2[i]) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
    }
    
    if (flag) {
        console.log(`Assertion Passed: ${arr1} === ${arr2} `);
    }
    else {
        console.log(`Assertion Failed: ${arr1} === ${arr2} `);
    }
}    

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, "1"]);
