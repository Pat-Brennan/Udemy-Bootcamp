//* Time Methods!
//? Methods that execute callback functions after a timer has run out

//* setTimeout()
//? Takes in two arguements, a callback function, and an amount of time in milliseconds

console.log("Hello there Traveller!"); // This prints first
setTimeout(() => {
	console.log("... Are you still with me, friend?"); // This prints third
}, 3000);

console.log("May the wind be at your back!"); // This prints second

//* setInterval()
//? Repeatedly calls a function or executes a code snippet
//? with a fixed time delay between each call.

const id = setInterval(() => { // Same set up as setTimeout
	console.log(Math.random());
}, 1000); // Every second, this loop will start over and generate another random number

//* clearInterval
//? Used to break the loop created by setInterval().
//? Global method that cancels a timed, or repeated action.

// clearInterval(id);

//! Worth noting, the pool of ID's used by setInterval and setTimeout are SHARED
//! Meaning, clearInterval(), and clearTimeout() can be used INTERCHANGEABLY.
