//* Array Callback Methods!
//? Specific set of methods that require us to pass in FUNCTIONS

//* forEach method
//? Accepts a callback function
//? Calls the function once per element in the array

const nums = [1, 2, 3, 4, 5]; // created nums array

//? Read as: forEach ENTRY in the ARRAY "nums," multiply that entry by itself!
nums.forEach((entry) => {
	// passed forEach an ARROW function
	console.log(entry * entry); // prints 1, 4, 9 etc.
});

const animals = ["Dog", "Bird", "DogBird", "BirdDog", "Cat"];

//? Read as: forEach ENTRY in the ARRAY "animals," insert that entry into the sentence!
animals.forEach((e) => {
	console.log(`Hey! It's a ${e}!`);
});

//? You could pass it a function you've already defined, but that's less common.
function print(element) {
	// pre-defined function
	console.log(`Hey! It's a ${element}!`);
}

animals.forEach(print); // This will do the same as the inline-defined arrow function

//? Another common format
nums.forEach(function (el) {
	// using an ANONYMOUS function
	console.log(el + el); // e, el, element, and entry, are common names in this format (but it could be anything)
});

//! .forEach has been made mildly obsolete by the for...of loop!(for...of is newer)

//? This will do the same as above
for (let el of nums) {
	console.log(el + el);
}

//? only logging even numbers
nums.forEach((e) => {
	if (e % 2 === 0) {
		console.log(`Hey! ${e} is even!`);
	}
});

//? only logging odd numbers
nums.forEach((e) => {
	if (e % 2 === 1) {
		console.log(`Hey! ${e} is odd!`);
	}
});

//? Logging even nums with for...of loop
for (let e of nums) {
	if (e % 2 === 0) {
		console.log(`Hey! ${e} is even!`);
	}
}

const movies = [
	{
		title: "Alien",
		score: 90,
	},
	{
		title: "Stewart Little",
		score: 40,
	},
	{
		title: "Free Guy",
		score: 98,
	},
];

movies.forEach((movie) => {
	console.log(`${movie.title} got a ${movie.score}/100!`);
});

//* Map
//? Creates a NEW ARRAY with the results of calling a CALLBACK FUNCTION on
//? every element in the array.

const texts = ["LOOOL", "smh", "omfg", "bdsm"];

const allCaps = texts.map((e) => {
	// map creates new array out of texts array
	return e.toUpperCase(); // and returns it in all caps
});

//? another way to write it
// const allCaps = text.map(function (e) {
//     return e.toUpperCase();
// })

//? does not MUTATE original array, only makes a new one!
const doubles = nums.map((e) => {
	return console.log(e * 2);
});

//? usually used when you just a portion of data over an entire array
const movieTitle = movies.map((movie) => {
	return console.log(movie.title);
});
