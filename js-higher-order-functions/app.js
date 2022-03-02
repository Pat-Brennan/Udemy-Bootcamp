//* Scope
//? Variable "Visibility"
//? The location where a variable is defined
//? dictates WHERE we will have access to that variable!

function totalEggs() {
	let totalEggs = 6;
	console.log(totalEggs);
}

//? THIS will print 6, because console.log(totalEggs)
//? is WITHIN SCOPE.
totalEggs();

//? THIS in a funny way will print [function: totalEggs]
//? since the VARIABLE "totalEggs" is out of scope,
//? it grabs the closest thing, which is the function!
console.log(totalEggs);

//! This is a unique example! For Semantic purposes,
//! Generally not a good idea to name variables the
//! Same as the function that variable is in!

//? Most functions work as STAND ALONE MACHINES

let bird = "Shoebill Stork";
function birdWatcher() {
	let bird = "Great Blue Heron";
	console.log(bird);
}

birdWatcher(); // Prints "Great Blue Heron" because SCOPE
console.log(bird); // Prints "Shoebill Stork"

//! If no BIRD variable was found inside of the function,
//! it would seek the closest bird variable OUTSIDE of the function.
//! i.e if bird was not found in LOCAL scope, it would resort to GLOBAL scope

//* Block Scope
//? A BLOCK is anything that uses curly braces that
//? IS NOT a function (i.e conditionals, loops, etc.)

let radius = 666;
if (radius > 0) {
	// The BLOCK starts here
	const PI = 3.14;
	let msg = "WELL HELLO FRIEND";
}

// console.log(msg); //msg is not defined, because it's WITHIN BLOCK SCOPE OF CONDITIONAL
console.log(radius); // radius is within GLOBAL SCOPE

for (let i = 0; i < 5; i++) {
	// BLOCK starts here
	const greeting = "HEYYYY!";
	console.log(greeting); // Will Print because it's WITHIN BLOCK SCOPE
}

// console.log(greeting); // This will throw an error due to scope

//! NOTE: if we replaced let and const with Var,
//! the would become GLOBAL in scope.(Which can get dangerous)

//* Lexical Scope
//? When a nested function(child) has access to the
//? outer function(parent) in SCOPE

function bankRobbery() {
	// Parent Function
	const heroes = ["Ant Man", "Black Panther", "Goku"]; // Variable in parent function
	function cryForHelp() {
		// Child function
		for (let hero of heroes) {
			// block within child function
			console.log(`HELP ME O IM SO HELPLESS ${hero.toLocaleUpperCase()}`);
		}
	}
	cryForHelp(); // Calling child function in
	// parent function to gain access to child-block
}

bankRobbery(); // prints "HELP ME O IM SO HELPLESS ANT MAN" etc.

//* Function Expressions
//? A conceptually different way of defining expressions

//? Storing the FUNCTION in a VARIABLE(square)
const square = function (num) {
	return num * num;
};

console.log(square(7));

//? Could be written like this, and works exactly the same
// function square(num) {
//     return num * num;
// }

//* Higher-Order Functions
//? Functions that operate on/with other functions as Arguments
//? They can: Take other functions as arguments, and return a function
//? Function inception...:D

let greet = function () {
	// declare a variable as a function
	console.log("Well howdy neighbor!");
};

function sentence(func) {
	func(); // Make it so that the function is EXPECTING a function to be passed in
	console.log("I was down by the warf the other day!");
}

sentence(greet); // Call function with function

//? Another way to do this...
function callTwice(func) {
	func();
	func();
}

function dumb() {
	console.log("Stop repeating yourself!");
}

function rollDie() {
	const roll = Math.floor(Math.random() * 6) + 1;
	console.log(roll);
}

callTwice(dumb); // Prints phrase twice
callTwice(rollDie); // Prints two random numbers between 1 and 6

//? Add loops to the mix...
function callTenTimes(func) {
	for (let i = 0; i < 10; i++) {
		func();
	}
}

callTenTimes(rollDie); // Prints 10 random numbers between 1 and 6

//* Returning Functions

function makeMysteryFunction() {
	const rand = Math.random();
	if (rand > 0.5) {
		return function () {
			// Function written INLINE. DOES NOT NEED NAME.
			console.log("Well woah howdy what a good day!");
		};
	} else {
		return function () {
			console.log("Man what a bad day woww!");
		};
	}
}

const mystery = makeMysteryFunction(); // store function inside variable

mystery(); // Determines good or bad day based on random number

//* Factory Function
//? a function that will make functions for me!

function inBetweenFunc(min, max) {
	return function (num) {
		// This is nameless, so we have to CAPTURE the value it produces.(isChild)
		return num >= min && num <= max;
	};
}

const isChild = inBetweenFunc(0, 18);
const isAdult = inBetweenFunc(19, 64);
const isSenior = inBetweenFunc(65, 110);

console.log(isChild(5)); // prints TRUE
console.log(isChild(20)); // prints FALSE
console.log(isAdult(25)); // prints TRUE
console.log(isAdult(88)); // prints FALSE
console.log(isSenior(69)); // prints TRUE
console.log(isSenior(115)); //prints FALSE
