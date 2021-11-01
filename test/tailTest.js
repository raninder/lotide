
const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 