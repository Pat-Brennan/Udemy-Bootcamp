//* Functions!

//? Functions allow us to write REUSABLE, MODULAR code
//? We define a "chunk" of code that we can then execute at a later point
//? Two step process: DEFINE it - then RUN it

//? function funcName () {
//?     //do something
//? }

//! Technically you can call the function BEFORE it's been defined
//! This is known as HOISTING and is generally a bad idea(but it will run)
rickRoll();

//? Notice the color coding... function is purple like LET
//? Here we've DEFINED it
function rickRoll() {
	console.log("Never gonna give you up!");
	console.log("Never gonna let you down!");
	console.log("Never gonna turn around and...");
	console.log("desert you!");
}

//? and here we've RUN it
rickRoll();

//* Arguments!

//? Arguments refer to the INPUT that we give our functions(i.e greet('Tim'))
//? They make our functions more DYNAMIC

//? We've given it an input, "name"
function greet(name) {
	//? We've told it to put that name in our console log...
	console.log(`HI ${name}!!!`);
}

//? Now running it, I've given it the ARGUMENT "TIMUS"
greet("TIMUS"); // prints HI TIMUS!!!

//* Multiple Arguments!

//? num1 and num2 are VARIABLES/PARAMETERS that hold the VALUE
//? of the ARGUMENTS that are passed in(i.e average(420, 666))
function average(num1, num2) {
	let result = (num1 + num2) / 2;
	console.log(result);
}

//? num1 and num2 are PARAMETERS, 420 and 666 are the ARGUMENTS
average(420, 666); // prints 543

//? If an expected arguement is not passed in a value
//? it will return "undefined" or "NaN"

average(); // returns NaN
rickRoll(); // will rick roll you because it's NOT expecting an arguement
greet(); // returns undefined within our string, but DOES NOT THROW AN ERROR // HI UNDEFINED!!!

//! Parameter = Variable i.e placeholder // num1
//! Argument = Value that fills placeholder // 420

//? order of your parameters matters!
function newGreet(firstName, lastName) {
	//? We can even get specific by grabbing the INDEX of our string with []
	console.log(`Well hey how are ya, ${firstName} ${lastName[0]}. ?`);
}

newGreet("Danny", "Devito"); // Prints "Well hey how are ya, Danny D. ?"
newGreet("Devito", "Danny"); // Prints "Well hey how are ya, Devito D.?"

// function repeat(phrase, repeatNum) {
//     let result = ""
//     for (let i = 0; i < repeatNum.length; i++) {
//         result += phrase;
//     }
//     console.log(result);
// }

// repeat("$", 3);

//* The Return Keyword
//? The OUTPUT of a function
//? allows you to STORE the output of your functions
//! STOPS THE FUNCTION AFTER EXECUTION

//? Built-in methods RETURN VALUES when we CALL them
const yell = "I will end you!".toUpperCase();
console.log(yell); // returns I WILL END YOU!

// function add(x, y) {
//     return x + y;
// }

//? or use two lines this way
// function add(x, y) {
//     let result = x + y;
//     return result;
// }

function add(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		return false;
		//? if both and x and y are not numbers the code will stop here
	} //? Technically we could put an else here, but this code will only execute
	//? if the above code is not reached.
	return x + y;
}

let addedNums = add(420, 666);
console.log(addedNums); // Prints 1086

let falseNums = add("Shit!", 69);
console.log(falseNums); // Prints false
