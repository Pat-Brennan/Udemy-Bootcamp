//* For Loops!

//! This is the consistent Syntax and structure of a FOR LOOP

//? for (
//?     [initial expression]; Declare a starting point
//?     [condition]; Boolean logic to say how long it should loop
//?     [incrementExpression]; expression to move to the next index ++ = +1
//? )

//? i starts at 1, as long as it's less than or equal to 10,
//? it will increment i by 1, and LOOP again
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

//? for loop that prints EVEN numbers
for (let i = 0; i <= 20; i += 2) {
	console.log(i);
}

//? for loop that prints ODD numbers
for (let i = 1; i <= 21; i += 2) {
	console.log(i);
}

//? for loop that counts down from 100
for (let i = 100; i >= 0; i -= 10) {
	console.log(i);
}

//? getting weird with it
//? i starts at 10, and as long as it's less than or equal to 1000, i * 10
for (let i = 10; i <= 1000; i *= 10) {
	console.log(i);
}

//* Infinite loops!

//! DO NOT RUN THIS
// for (let i = 20; i > 0; i++) { //? i will ALWAYS be greater than 0 being incremented by 1
//     console.log(i); //? creating infinity
// }
//! WHICH IS BAD!

//* Looping over Arrays

const animalBeers = [
	"Lions Head",
	"Dogfish Head",
	"Dirt Wolf",
	"Golden Monkey",
	"Grapefruit Sculpin",
	"Raging Eagle",
];

//? this will loop over each INDEX of the animalBeers array
//? could also be written as "i <= animalBeers.length - 1"
//? if left at "i <= animalBeers.length" you'll get an "undefined" at the end
for (let i = 0; i < animalBeers.length; i++) {
	console.log(i, animalBeers[i]); //? i prints the index, animalBeers[i] prints the value
}

//? reverse it!

for (let i = animalBeers.length - 1; i >= 0; i--) {
	console.log(i, animalBeers[i]);
}

//* Nested For Loops!

//? i will run one cycle
for (let i = 1; i <= 10; i++) {
	console.log(`i is: ${i}`);
	//? and then j will run all of it's cycles
	for (let j = 1; j < 4; j++) {
		console.log(`     j is: ${i}`);
	}
}

//* using a nested for loop to iterate through a class of students
const seatingChart = [
	["Person", "mitchell", "scraggy"],
	["john", "jimmy", "juggle"],
	["jimbo", "wiggle", "cauliflower"],
];

//? the first loop will grab the first array (the row of students)
for (let i = 0; i < seatingChart.length; i++) {
	const row = seatingChart[i];
	console.log(`ROW ${i + 1}`);
	//? The second loop will then go through everything in that array (the students themselves)
	for (let j = 0; j < row.length; j++) {
		console.log(row[j]);
	}
	//? and then do it all again!
}

//* While Loops
//? Very similiar to FOR loops, just looks a little cleaner
//? and the logic is a little more straight forward

//? WHILE count is less than 10, *Execute code inside curly braces*
let count = 0;
while (count < 10) {
	count++;
	console.log(count);
}

//! WARNING Very easy to make infinite loops!

//? Good for things that you don't know how many times you iterate through something
//? Like games!

//! Warning for future me looking at this!
//! window.prompt is NOT valid in Node.js
//! but IS valid in the browser! smh -_-

// while (!gameOver) {
// 	//player 1 turn
// 	//player 2 turn
// }
// Congrats you've exited the loop and won the game!

// const SECRET = "BIGHIPPO";

// let guess = window.prompt("guess the secret!");
// while (guess !== SECRET) {
// 	guess;
// }
// console.log("Congrats it's  a BIG HIPPO!!!");

//* The Break Keyword

// let input = prompt("Say something!");
// while (true) {
// 	window.prompt(input);
// 	if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Okay Jeez!");

//* For ... Of Loop
//! Not supported in internet explorer

//? for (variable of iterable) {
//?		statement
//? }

const doggos = [
	"husker",
	"labrador",
	"chihuahua",
	"fat boi",
	"squishy face",
	"chips",
];

for (let doggo of doggos) {
	console.log(`You found a ${doggo}!`);
}

//? For comparison to nested for loops,
//? Here's a nested for..of loop of the seating chart above

for (let row of seatingChart) {
	//? access each array
	for (let students of row) {
		//? then each entry in array
		console.log(students); //? print each entry found
	}
}

//? normal nested for loop for reference. Less clean, more confusing.
// for (let i = 0; i < seatingChart.length; i++) {
// 	const row = seatingChart[i];
// 	for (let j = 0; j < row.length; j++) {
// 		console.log(row[j]);
// 	}
// }

//! For...of loops can be used to iterate over all kinds of things!
//! Not just arrays! but CANNOT be used on OBJECT LITERALS

//? This will iterate over the string "doggos" and print each character
for (let char of "doggos") {
	console.log(char);
}

//* For ... In Loops
//? Can be used on Object Literals!
//? Relatively uncommon in comparison to for...of

const testScores = {
	Ben: 30,
	Tim: 500,
	Shelly: 420,
	Jonald: 1,
	Opuspocus: 666,
};

//? This will initially only grab the KEY
for (let person in testScores) {
	//? But after the KEY is grabbed, we can grab the VALUE (testScores[person])
	console.log(`${person} scored ${testScores[person]}`);
}

//* Object method
//? Can be used to access what's inside of an object and return them as an array

//? This will grab the keys
console.log(Object.keys(testScores)); // ['Ben', 'Tim', 'Shelly'... etc]

//? This will grab the values
console.log(Object.values(testScores)); // [30, 500, 420 ... etc]

//? This will grab the entire entry, and returb it in a NESTED ARRAY
console.log(Object.entries(testScores)); // [['Ben', 30], ['Tim', 500] ... etc]

//* Use Object method to iterate with For...of loop

//? This will iterate through all the values in test scores
//? and then sum them up
let total = 0;
for (let scores of Object.values(testScores)) {
	total += scores;
}
console.log(total);

//! Objects technically do not have a LENGTH!
