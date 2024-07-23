// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



const magicians: string[] = ["Harry Houdini", "David Blaine", "Teller"];

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}


console.log("Original magician names:");
show_magicians(magicians);

make_great(magicians);

console.log("\n Modified magician names:");
show_magicians(magicians);