const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log("\uD83D\uDE00" + "Assertion Passed: " + `${actual}` + " === " + `${expected}`);
    }
    else {
        console.log("Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
    }
};

const countLetters = function (str) {
    let letters = {};

    for (let i = 0; i < str.length; i++) {
        let count = 1;
        
        if(letters[str[i]]){
            count++;
            letters[str[i]] = count;
        }
        else{
            letters[str[i]] = count;
        }
    }
    return letters;
};


console.log(countLetters("helleo"));
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("hello")["o"], 1);
//output
/*{
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  }*/