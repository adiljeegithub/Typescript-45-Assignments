"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
function transportation(transport, color, brand) {
    return {
        transport,
        color,
        brand
    };
}
const transportations = [
    transportation("car", "white", "toyota"),
    transportation("bike", "grey", "kawasaki"),
    transportation("bike", "black", "honda"),
    transportation("bicycle", "blue", "bmx"),
];
let invalidIndex = 7;
console.log("transportation at index ", invalidIndex, transportations[invalidIndex]);
if (invalidIndex > 3) {
    invalidIndex = 2;
    console.log("transportation at index ", invalidIndex, transportations[invalidIndex]);
}
else {
    console.log("no need to change");
}
