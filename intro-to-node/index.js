// this is a module inside the node itself
// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");

//====================================================

// getting module from npm
// Superhereos module to generate random names

//look at package.json file and you will find the module added as dependency after installing it
// var superhereos = require("superheroes");

// console.log(superhereos.random());
//==========================================
//  adding another module

const supervillains = require("supervillains");
console.log(supervillains.random());
