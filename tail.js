const assertEqual = require("./assertEqual")
const tail = function(arr){
    let ele = arr.slice(1,arr.length);
    return ele;
}

// TEST CODE
// console.log(tail([3,4,5]));
// console.log(tail([]));
// console.log(tail([5]));
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(words.length, 3); 
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); 


module.exports = tail;