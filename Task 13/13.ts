// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportations: Array<[transport: string, brand: string]> = [];
transportations.push(["motorcycle", "Honda"]);
transportations.push(["car", "toyota"]);
transportations.push(["bicycle", "bmx"]);

for (let transportation of transportations) {
  console.log(
    `I would like to own a ${transportation[1]} ${transportation[0]}.`
  );
}
