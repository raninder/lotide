const findKeyByValue = function(obj, value) {
    for (let key of Object.keys(obj)) {
        console.log(key,":", obj[key]);
        if(obj[key] === value){
            return key;
        }
    }
};

const assertEqual = function(actual, expected) {
    if(actual === expected){
        console.log("\uD83D\uDE00"+"Assertion Passed: " +`${actual}`+ " === "+`${expected}`);
    }
    else {
        console.log("Assertion Failed: " +`${actual}`+ " !== "+`${expected}`);
    }
 };

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

//console.log(findKeyByValue (bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);