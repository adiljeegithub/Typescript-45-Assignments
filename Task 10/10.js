"use strict";
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
Object.defineProperty(exports, "__esModule", { value: true });
// my name is Muhammad Mubashir Saeedi 
// so in this program i added my name into a variable and then printed it with a message
let person = "Muhammad Mubashir Saeedi";
console.log(`Hello ${person}, would you like to learn TypeScript today?`);
// program 2 
// in this program i created a name with whitespaces and added it into a variable and then created another variable where i trimed the whitespaces and printed both of them
let namewithwhitespaces = "\t Muhammad Mubashir Saeedi \n";
let stripedname = namewithwhitespaces.trim();
console.log("orignal name:", namewithwhitespaces, "stripped name:", stripedname);
