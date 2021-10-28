const eqObjects = function ( obj1, obj2){
    let flag = false;
    if(Object.keys(obj1).length === Object.keys(obj2).length ) {
        for (let key of Object.keys(obj1)) {
            if(obj1[key] === obj2[key]) {
            flag = true;
            }
            else {
                flag = false;
            }
        }
    }     
   return flag;
}; 

const assertObjectsEqual = function(objA, objB) {
    let flag = eqObjects(objA,objB);
    
    if (flag) {
        console.log("Assertion Passed:", objA, "===",objB);
    }
    else {
        console.log("Assertion Failed:", objA, "===",objB);
    }
  };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);