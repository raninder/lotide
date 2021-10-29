const findKey = function (obj, callback) {
    for (let key of Object.keys(obj)) {
        if (callback(obj[key])) {
            return key;
        }
    }
};

    const assertEqual = function (actual, expected) {
        if (actual === expected) {
            console.log("\uD83D\uDE00" + "Assertion Passed: " + `${actual}` + " === " + `${expected}`);
        }
        else {
            console.log("Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
        }
    };

    const res = findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri": { stars: 3 },
        "noma": { stars: 2 },
        "elBulli": { stars: 3 },
        "Ora": { stars: 2 },
        "Akelarre": { stars: 3 },
    }, x => x.stars === 2);
    console.log(res);

assertEqual("Ora", res);
assertEqual("noma", res);