"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal = ["cat", "dog", "cow"];
console.log("list of animal");
for (let i of animal) {
    console.log(i);
}
console.log("list of animals with sentences:");
for (let i of animal) {
    if (i == "cat") {
        console.log(i, "is a cute animal");
    }
    else if (i == "cow") {
        console.log(i, "is a big animal");
    }
    else {
        console.log(i, "is a loyal animal");
    }
}
console.log("Any of these animals would make a great pet or friend!");
