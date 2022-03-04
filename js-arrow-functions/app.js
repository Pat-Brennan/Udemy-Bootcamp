//* Arrow Functions!
//? A newer syntax for writing our functions
//? "A syntactically compact alternative to a regular function expression"
//! NOT SUPPORTED BY INTERNET EXPLORER

const squared = (x) => {
	return x * x;
};

const sum = (x, y) => {
	return x + y;
};

//? Other ways to write what's above:

const sum2 = function (x, y) {
	return x + y;
};

function sum3(x, y) {
	return x + y;
}

//? They basically get rid of writing the word function

//? particularly useful for functions that are only
//? used when passed to other functions, like with .map()
