function without(sourceArray, removeArray) {
    let resArray = [];
    for (let i = 0;i < sourceArray.length; i++){
        if (sourceArray[i] !== removeArray[i]){
            resArray.push(sourceArray[i]);
        }
    }    
    console.log(resArray);      
}    

function assertArraysEqual( arr1, arr2) {
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

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"])
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


