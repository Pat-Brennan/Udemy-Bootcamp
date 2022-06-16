//* The Call Stack!
//? The Mechanism the JS interpreter uses to keep track of its place in a script
//? that calls multiple functions.
//? How JS "knows" what function is currently being run and what functions
//? are called from within that function.

//? A STACK is a "Last in - Last out" data structure in computer science.

//* How it works
//? When a script calls a function, the interpreter add it to the call stack
//? and then starts carrying out the function.

//? Any functions that are called by that function are added to the call stack
//? further up, and run where their calls are reached.

//? When the current function is finished, the interpreter takes it off the stack
//? and resumes execution where it left off i nthe last code listing.

//* Example

//? Top of the stack of books
const multiply = (a, b) => console.log(a * b); // Ooo this is multiply *** then go back down the stack ***

//? We must go through this stack everytime we want to find an answer 
const square = a => console.log(multiply(a, a)); // well what's multiply()?

//? Think of this as the bottom of a stack of books
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c); // What's square(a)?
};