// //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests = ["Asad", "Mubashir", "Ayaz"];
 
for (let guest of guests) {
    console.log("Hello " + guest + ", i just found a bigger table so more space is available");
}

let guestsno1 = "ZiaKhan";
guests.unshift(guestsno1);

let guestsno2 = "Hamzah";
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, guestsno2);

let guestsno3 = "Ahtesham";
guests.push(guestsno3); 

console.log("\n new set of invitations \n")
for (let guest of guests) {
    console.log("Hello " + guest + ", join us for dinner!");
}
