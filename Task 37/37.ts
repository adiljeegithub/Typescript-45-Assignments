// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeshirt(size:string = "large",message:string = "I love Typescript"): void
{
   return console.log(`Size:${size},Message: ${message}`);
}

makeshirt();
 
makeshirt("medium");



makeshirt("Small","Hello world!");