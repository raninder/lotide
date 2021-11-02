const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }


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
                return false;
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

//assertArraysEqual([1, 2, 3], [1, 2, 3]);
//assertArraysEqual([1, 2, 3], [3, 2, "1"]);

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map (words, word => word.toUpperCase());
const results3 = map (words, word => word.indexOf('o'));
//console.log(results3);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['ground', 'CONTROL', 'TO', 'major', 'TOM']);
assertArraysEqual(results3, [1, 3, 2, 0, 4]);
