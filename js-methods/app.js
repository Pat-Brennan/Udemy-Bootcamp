//* Methods!
//? A METHOD is a FUNCTION that has been placed as a PROPERTY on an OBJECT.
//? "hello".toUpperCase(); is a String Method.
//? Every method is a function but not every function is method.

const myMath = {
	// We've created the OBJECT myMath
	add: function (a, b) {
		// The KEY is "add" and the VALUE is a function
		return a + b;
	},
	multiply: function (a, b) {
		return a * b;
	},
	square: function (a) {
		return a * a;
	},
};

//? Just like a string method, we're attaching the KEY
//? to our object, which will then execute what is the VALUE
console.log(myMath.add(4, 8)); // Prints 12
console.log(myMath.multiply(3, 5)); //Prints 15
console.log(myMath.square(9)); // Prints 81

//? You could even use bracket notation! (even though that'd be weird 🤮)
console.log(myMath["add"](420, 666));
console.log(myMath["multiply"](420, 666));
console.log(myMath["square"](666));

//* Shorthand way (modern version)

const shortMath = {
	//? Make the KEY the name of the function
	add(a, b) {
		return a + b;
	}, //? Comma is still necessary because it's an OBJECT
	multiply(a, b) {
		return a * b;
	},
	square(a) {
		return a * a;
	},
};

console.log(shortMath.add(9, 4));
console.log(shortMath.multiply(9, 4));
console.log(shortMath.square(4));

//* "This" Keyword
//? Used to access other properties on the same object

const cat = {
	name: "Eorah",
	color: "Black",
	breed: "Domestic Shorthair",
	meow() {
		console.log("MEOW MEOW MEOW MEOW MEOW!");
	},
	telepathy() {
		console.log(
			//? "this" keyword allows me to grab the NAME and BREED from the OBJECT
			`Hello HUMAN! I am ${this.name}, a ${this.breed} and destroyer of worlds!`
		);
	},
};

cat.meow();
cat.telepathy();

//! BAD NEWS: "this" can be complicated.
//! The value of "this" depends on the INVOCATION CONTEXT of the FUNCTION it is used in.

const telepathy2 = cat.telepathy();

console.log(telepathy2);
