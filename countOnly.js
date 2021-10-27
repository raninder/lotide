const countOnly = function(allItems, itemsToCount) {
    
    let retObj = {};
    for (let key in itemsToCount) {
        if(itemsToCount[key] === true) {
            console.log("key",key,"value",itemsToCount[key]); 
            let count = 0;
            for (let ele of allItems) {
                
                if (ele === key) {
                    console.log("ele", ele, "key",key);
                    count++;
                }
                retObj[key] = count;
            }
        }
    }
    return retObj;
}

const assertEqual = function(actual, expected) {
    if(actual === expected){
        console.log("\uD83D\uDE00"+"Assertion Passed: " +`${actual}`+ " === "+`${expected}`);
    }
    else {
        console.log("Assertion Failed: " +`${actual}`+ " !== "+`${expected}`);
    }
    };

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);