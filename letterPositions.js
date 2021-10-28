const letterPositions = function (str) {
    let pos = {};
    //let arr= [];

    for (let i = 0; i < str.length; i++) {
        
        if (pos[str[i]]) {
             pos[str[i]].push(i);
        }
        else {
            pos[str[i]] = [i];
        }
    }
    return pos;

};

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

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);