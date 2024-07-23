"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guests = ["Asad", "Mubashir", "Ayaz"];
let Guestcantmakeit = "Ayaz";
console.log(`${Guestcantmakeit} can't make it to Dinner`);
let newguest = "Ahmed";
let indexofguestnotcoming = guests.indexOf(Guestcantmakeit);
guests[indexofguestnotcoming] = newguest;
console.log("new set of invitations:");
for (let guest of guests) {
    console.log(`Hello ${guest}, you are invited for our dinner party tonight ,`);
}
