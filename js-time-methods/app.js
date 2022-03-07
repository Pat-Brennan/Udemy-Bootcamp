//* Time Methods!
//? Methods that execute callback functions after a timer has run out

//* setTimeout
//? Takes in two arguements, a callback function, and an amount of time in milliseconds

console.log("Hello there Traveller!"); // This prints first
setTimeout(() => {
	console.log("... Are you still with me, friend?"); // This prints third
}, 3000);

console.log("May the wind be at your back!"); // This prints second
