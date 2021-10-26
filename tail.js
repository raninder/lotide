const assertEqual = function(actual, expected) {
if(actual === expected){
    console.log("\uD83D\uDE00"+"Assertion Passed: " +`${actual}`+ " === "+`${expected}`);
}
else {
    console.log("Assertion Failed: " +`${actual}`+ " !== "+`${expected}`);
}
};
const tail = function(arr){
    let ele = arr.slice(1,arr.length);
    return ele;
}

// TEST CODE
console.log(tail([3,4,5]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3); 
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 

/*assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), 5);*/
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//Assertion Failed: Lighthouse Labs !== Bootcamp
//Assertion Passed: 1 === 1