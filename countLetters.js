const assertEqual = function(actual, expected) {
    if(actual === expected){
        console.log("\uD83D\uDE00"+"Assertion Passed: " +`${actual}`+ " === "+`${expected}`);
    }
    else {
        console.log("Assertion Failed: " +`${actual}`+ " !== "+`${expected}`);
    }
 };

const countLetters = function(str) {
    let letters = {};
    
    for (let i = 0; i<str.length; i++) {
        let count = 0;
        for(let j=0; j<str.length;j++)
        {
        //console.log(str[i]);
            if(str[i] === str[j]) {
             count++;
            }
            letters[str[i]] = count;
        }   
    }        
    return letters;
};


console.log(countLetters("glooveely"));
console.log(countLetters("lighthouse in the house")); 
assertEqual(countLetters("hello")["o"],2);
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