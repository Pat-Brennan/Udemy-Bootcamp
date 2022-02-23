//* Writing a simple guessing game

//? parseInt will take in a string, and parse out a number
let maximum = parseInt(window.prompt("Please enter your maximum number"));
//? WHILE there is no valid number... Keep asking for a valid number
while (!maximum) {
	maximum = parseInt(window.prompt("Please enter a valid number"));
}

//? Math.random() will generate a decimal between 0 and 1
//? Multiple by 10 to make it a whole number
//? Math.floor will chop off the decimal
//? Add 1 so that the number cannot be 0
// Math.floor(Math.random() * 10) + 1;

//? Target Number is created by taking the user input(maximum)
//? Multiplying it by the random number, chopping off decimal, and adding one
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1; //? There will always be atleast one attempt
while (parseInt(guess) !== targetNum) {
	if (guess === "q") { //? This will break the loop
		break;
	}
	attempts++;
	if (guess > targetNum) {
		guess = prompt("Too High!");
	} else {
		guess = prompt("Too Low!");
	}
}
if (guess === "q") {
	console.log("See ya later alligator!");
} else {
	console.log(`You did it! It took you ${attempts} attempts!`);
}
