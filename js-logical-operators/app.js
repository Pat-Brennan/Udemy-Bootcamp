//* LOGICAL OPERATORS! && (AND), || (OR), and ! (NOT or "BANG")

//* && operator

//? && Joins the expression on the left with the expression on the right
//? In other words BOTH must be true for code to run

1 <= 4 && "a" === "a"; //? True
9 > 10 && "a" === "Dinosaur"; //! False

const password = prompt("Please Enter Password");

//? Both sides of this if statement must be true to execute the first alert
if (password.length >= 6 && password.indexOf(" ") === -1) {
	window.alert("Nice functioning passoword ya go there!");
} else {
	window.alert("ya fucked up Broden!");
}

//* || operator

//? The OR operator DOES NOT require both sides to be true
1 !== 1 || 10 === 10; //? True
6 !== 6 || "Doggo" !== "Doggo"; //! False
0 || undefined; //! False

//? by combining the various operands, you can get very specific with what you want
// const age = 90;
// if ((age >= 0 && age <= 5) || age >= 65) {
// 	console.log("FREE");
// } else if (age >= 5 && age < 10) {
// 	console.log("10 bucks!");
// } else if (age >= 10 && age < 65) {
// 	console.log("20 bucks!");
// } else {
// 	console.log("your old get outta here!");
// }

//* ! operator

//? The NOT or BANG operator turns something to the opposite of what it is. Like true to false

!null; //? True
!(0 === 0); //! False
!(3 <= 4); //! False

const firstName = prompt("Please Enter First Name");

//? The NOT operator in front of first name implies, if there is no first name entered... then run this code
//? "If there is NOT a firstName"
if (!firstName) {
	console.log("You forgot your name!");
}

const age = 45;
//? Here, the NOT operator flips the entire expression
if (!((age >= 0 && age <= 5) || age >= 65)) {
	console.log("YOU ARE NOT A BABY OR A SENIOR");
}

//* SWITCH Statement

//? The Switch statement is another control-flow statement that can replace Multiple IF statements
//? Good to know about but the syntax is unweildy and hard to remember

//? Switch Cases will look for a match, and then continue to run everything after
//? Until it hits a BREAK. Like hitting the breaks in a car!
const day = 100;
switch (day) {
	case 1:
		console.log("MONDAY");
		break;
	case 2:
		console.log("TuesDAY");
		break;
	case 3:
		console.log("wednesDAY");
		break;
	case 4:
		console.log("thursDAY");
		break;
	case 5:
		console.log("friDAY");
		break;
	case 6:
		console.log("satDAY");
		break;
	case 7:
		console.log("sunDAY");
		break;
	default:
		console.log("I don't heckin know broden!");
}
