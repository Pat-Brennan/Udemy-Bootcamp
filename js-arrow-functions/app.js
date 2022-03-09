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

//! Arrow functions CANNOT be written on there own!
//! They MUST be saved to a variable when standing alone

(x, y) => {
	// doesn't throw any errors
	return x + y; // but doesn't give us a way to CALL it
};

//? Even with no arguements passed in, Parens are still needed
const rollDie = () => {
	return Math.floor(Math.random() * 6) + 1;
};

console.log(rollDie()); // prints random die roll

//? UNLESS you only have one parameter! HA HA HA!!!
//? Then you could GET RID of the Parens :O :O :O

const square2 = x => {
	return x ** 2; //? ** raises the power
};

console.log(square2(4)); //prints 16

//* Implicit Returns
//? When it's implied that you're returning something,
//? so you actually LEAVE OUT the RETURN KEYWORD.
//? This is indicated by REPLACING CURLY BRACKETS WITH PARENS
//! THIS ONLY WORKS WITH ARROW FUNCTIONS!!!
//! THIS ONLY WORKS WHEN YOUR RETURN EVALUATES TO A SINGLE EXPRESSION!!!

const isEven = function (num) { // Regular function expression
    return num % 2 === 0; 
}

const isEven2 = (num) => { // arrow functions with parens around param
    return num % 2 === 0;
}

const isEven3 = num => { // arrow function without parens
    return num % 2 === 0;
}

//! NOTICE THE PARENS REPLACING THE CURLY BRACKETS!!!
const isEven4 = num => ( // arrow function with IMPLICIT RETURN
    num % 2 === 0
);

const isEven5 = num => num % 2 === 0; // Written on a single line

//! THESE ALL DO THE SAME THING

const rollDie2 = () => ( // parens with no params
    Math.floor(Math.random() * 6) + 1 // implicit return
);

console.log(rollDie2());

//? Technically, you could even GET RID of IMPLICIT RETURN PARENS

const add3 = a => a + a; // This works! lmao

console.log(add3(3));

//* Using Arrow functions with .map() and .forEach()

const videogames = [
    {
        title: "Bioshock",
        rating: 100,
    },
    {
        title: "No Mans Sky",
        rating: 100,
    },
    {
        title: "Undertale",
        rating: 100,
    },
    {
        title: "Doki Doki Literature Club",
        rating: 40,
    }
];

//? Typical Arrow Function

const videogameTitles = videogames.map((game) => {
    return `${game.title} - ${game.rating / 10}/10`;
})

console.log(videogameTitles);

//? Written with Implicit return on a single line (Kinda long...)

const videogameTitles2 = videogames.map(game => `${game.title} - ${game.rating / 10}/10`);

console.log(videogameTitles2);

//? Written with implicit return on multiple lines

const videogameTitles3 = videogames.map((game) => ( // Notice the Parens!!!
    `${game.title} - ${game.rating / 10}/10`
));

console.log(videogameTitles3);

//* Arrow functions and the keyword "this"
//? Keyword this behaves differently in "function ()" vs. "() =>"
//! THEY DO NOT PLAY WELL TOGETHER(sometimes)

const person = {
    firstName: "Rick",
    lastName: "Sanchez",
    fullName: function () { // this WOULD NOT work as an arrow function
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000);
    }
}
console.log(person);