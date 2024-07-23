// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person1: string = "muhammad Mubashir saeedi";
let personLower: string = person1.toLowerCase();
let personUpper: string = person1.toUpperCase();

let words: string[] = person1.split(" ");
let personTitle: string = words
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

console.log("lowercase:", personLower);
console.log("uppercase:", personUpper);
console.log("titlecase:", personTitle);
