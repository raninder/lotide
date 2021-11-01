const assertEqual = function(actual, expected) {
if(actual === expected){
    console.log("\uD83D\uDE00"+"Assertion Passed: " +`${actual}`+ " === "+`${expected}`);
}
else {
    console.log("Assertion Failed: " +`${actual}`+ " !== "+`${expected}`);
}
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Labs", "Labs");
// assertEqual(1, 10);
//Assertion Failed: Lighthouse Labs !== Bootcamp
//Assertion Passed: 1 === 1

module.exports = assertEqual;