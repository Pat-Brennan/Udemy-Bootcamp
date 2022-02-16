//? This will print to the console in the browser, but it must be console logged!
// console.log("HELLO FELLOW HUMAN! YOU'VE MADE IT SO FAR!!");

// let total = 4 + 2;
// console.log(total);

//* Working with IF/ELSE/ELSE IF

//? IF this thing is true, what is inside the parens will occur
// if (total === 6) {
// 	console.log("ya kroiky mate it's a six ya fack!");
// }

// if (1 + 1 === 2) {
// 	console.log("Math still works!");
// }

//? We can put as much as we want between the curly brackets!
// let random = Math.random();
// if (random < 0.5) {
// 	console.log("Woah there Tiger! Your num nums are tooo small!");
// 	console.log(random);
// } else {
//     console.log("Your number is greater than 0.5!");
// }
// console.log(random);

// if (random > 0.5) {
// 	console.log("well darn tootin that's a big ol number you got!");
// 	console.log(random);
// }

//? ELSE IF will only run if the first "if" does not

// const dayOfWeek = prompt("Please enter a day of the week").toLowerCase();

// if (dayOfWeek === "Tuesday") {
// 	console.log("Thank goodness it's not monday!");
// } else if (dayOfWeek === "Monday") {
// 	console.log("It's monday ):");
// } else if (dayOfWeek === "Friday") {
// 	console.log("It's FRIDAAAYAYY!");
// } else {
// 	console.log("MEH");
// }

// const age = 68;

// if (age > 0 && age <= 5) {
// 	console.log("your a child! You get in for free!");
// } else if (age >= 6 && age <= 10) {
// 	console.log("Gimme 10$ bucks you child!");
// } else if (age >= 11 && age <= 65) {
// 	console.log("MAXIMUM PRIIICE");
// } else {
// 	console.log("You're old! No worries!");
// }

//* Nested Conditionals

const password = prompt("Please enter your password");
//? Check to make sure the password is at least 6 characters long
if (password.length >= 6) {
	//? Check to make sure the password has no spaces (a space evaluates to -1 in the console)
	if (password.indexOf(" ") === -1) {
		window.alert("Valid Password!");
	} else {
		window.alert("So much spaces for activity!");
	}
} else {
	window.alert("You need more characters homie!");
}
