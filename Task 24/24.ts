// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
let str1 = "taha"
let str2 = "hassan"

console.log(str1 === str2, "I predict false")
console.log(str1 !== str2, "I predict true")
console.log(str1.length < str2.length, "I predict true")

console.log(str1.toLowerCase() === str2.toLowerCase(), "I predict false")
console.log(str1.toLowerCase() !== str2.toLowerCase(), "I predict true")
console.log(str1.toLowerCase() === str1, "I predict true")


let num1 = 10;
let num2 = 20;

console.log(num1 === num2, "I predict false");

console.log(num1 !== num2, "I predict true");

console.log(num1  >  num2, "I predict false");

console.log(num1  <  num2, "I predict true");

console.log(num1 >=  num2,  "I predict false");

console.log(num1 <=  num2,"I predict true");

let num3 = num1 + num2;

console.log(num1 >= num2 || num3 >= num2, "I predict true");

console.log(num1 >= num2 && num3 >= num2, "I predict true");

console.log(num1 >= num2 && num3 >= num2, "I predict false");

console.log(num1 >= num2 || num3 <= num2, "I predict false");

let arr = ["a", "b", "c", "d"];

console.log(arr.includes("a"), "I predict true" );

console.log(arr.includes("e"), "I predict false" );