"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = [null];
if (userNames.length == 0 || userNames.every(userName => userName === null)) {
    console.log("We need to find some users!");
}
else {
    for (let user of userNames) {
        if (user === "admin") {
            console.log("hello admin would you like to see the status report");
        }
        else {
            console.log("hello ", user);
        }
    }
}
