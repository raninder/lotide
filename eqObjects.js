const eqObjects = function ( obj1, obj2){
    let flag = false;
    if(Object.keys(obj1).length === Object.keys(obj2).length ) {
        for (let key of Object.keys(obj1)) {
            if(obj1[key] === obj2[key]) {
            //console.log (obj1[key], obj2[key]);
            flag = true;
            }
            else {
                //console.log (obj1[key], obj2[key]);
                flag = false;
            }
        }
    }     
   return flag;
}; 

const assertEqual = function(actual, expected) {
    if(actual === expected){
        console.log("\uD83D\uDE00"+"Assertion Passed: " +`${actual}`+ " === "+`${expected}`);
    }
    else {
        console.log("Assertion Failed: " +`${actual}`+ " !== "+`${expected}`);
    }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true*/
assertEqual(eqObjects(cd, dc), true);

//const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false