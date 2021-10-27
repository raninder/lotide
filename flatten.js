const flatten = function (arr){
    let newArray = [];
    for ( let ele of arr)
    {
        if(Array.isArray(ele)){
         let temp = ele;
         for (let item of temp) {
             newArray.push(item);
         }   
        }
        else {
            newArray.push(ele);
        }
    }
    return newArray;
}


function assertArraysEqual( arr1, arr2) {
    let flag = false;
    console.log(arr1);
    console.log(arr2);

    for (let i = 0;i < arr1.length; i++){
        if (arr1[i] === arr2[i]) {
            flag = true;
        }
        else {
            flag = false;
        }
    }
    
    
    if (flag) {
        console.log(`Assertion Passed: ${arr1} === ${arr2} `);
        
    }
    else {
        console.log(`Assertion Failed: ${arr1} === ${arr2} `);
        
    }
}    

//console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(([1, 2, [3, 4], 5, [6]]), flatten([1, 2, [3, 4], 5, [6]]));

//output:
// [1, 2, Array(2), 5, Array(1)]
// [1, 2, 3, 4, 5, 6]
// Assertion Failed: 1,2,3,4,5,6 === 1,2,3,4,5,6 


