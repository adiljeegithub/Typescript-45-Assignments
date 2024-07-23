"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log('\nThis version has color green');
let aliencolor = 'green';
if (aliencolor === 'green') {
    console.log('you got 5 points.');
}
else if (aliencolor === 'yellow') {
    console.log('you got 10 points.');
}
else if (aliencolor === 'Red') {
    console.log('you got 15 points.');
}
console.log('This version has color Yellow');
aliencolor = 'yellow';
if (aliencolor === 'green') {
    console.log('you got 5 points');
}
else if (aliencolor === 'yellow') {
    console.log('you got 10 points');
}
else if (aliencolor === 'Red') {
    console.log('you got 15 points');
}
console.log('This version has color red');
aliencolor = 'Red';
if (aliencolor === 'green') {
    console.log('you got 5 points.');
}
else if (aliencolor === 'yellow') {
    console.log('you got earned 10 points.');
}
else if (aliencolor === 'Red') {
    console.log('you got 15 points.');
}
