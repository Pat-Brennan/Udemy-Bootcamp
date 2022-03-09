//* Default Params(parameters)
//? Setting our parameters to a DEFAULT value if in the event there is no input

//? The old way 🤠
function rollDie(numsides) {
    if (numsides === undefined) { // using an if statement to VALIDATE if numSides was passed anything
        numsides = 6;
    }
    return Math.floor(Math.random() * numsides) + 1;
}

//? The New Way ✨
function rollDie2(numSides = 6) { // we declare numSides to DEFAULT to 6 IF nothing is passed in
    return Math.floor(Math.random() * numSides) + 1; // No IF statement needed!
}

//! Default Params are great, but ORDER MATTERS!!!

//? JS is not smart enough to know that what you passed in was supposed to come SECOND
function person(greet = "Hey There", name) {
    return `${greet}, ${name}!`
}
console.log(person("George")); // prints George, undefined!

//? So always use your default params AFTER initial Argument
function person2(name, greet = "Hey There", punc = "!") {
    return `${greet}, ${name}${punc}`;
} 
console.log(person2("Jaoquin Phoenix")); // prints Hey there, Jaoquin Phoenix!
console.log(person2("Bongo", "What up", "!?!?!"));

//* Spread Syntax (...)
//? Spread syntax allows an iterable such as an array to be EXPANDED
//? in places where zero or more arguments(for function calls) or
//? elements (for array literals) are expected, or an object expression
//? to be expanded in places where zero or more key-value pairs (for object literals)
//? are expected. Phew! That's a lot.

//! The "Swiss army knife" of JS!

//? This example is rigid, but works.
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 4, 666];

console.log(sum(...numbers)); // prints 671
console.log(sum([1, 4, 666])); // prints [1, 4, 666,], undefined, undefined because sum is expecting 2 more arguments
console.log(sum(...[1, 4, 666])); // prints 671 becuase it SPREAD OUT the entries amongst the arguments
console.log(sum(...[1, 4, 666, 420])); // still prints 671 because there aren't enought args for 420

console.log(numbers); // prints array of numbers with brackets
console.log(...numbers); // prints numbers... but takes brackets away and adds spaces

//* Using spread to combine two arrays :O

const dogs = ["Hope", "Rover", "Ruff boi"];
const cats = ["CHIimmy", "Chocolate bar", "Mr.whiskey"];

//? This makes a COPY, it does NOT ALTER original array
const allPets = [...dogs, ...cats]; // this will combine both arrays into one

console.log(dogs);
console.log(cats);
console.log(allPets); 

//* Using spread on OBJECTS
//? Just like with arrays, we can SPREAD properties from
//? objects into NEW objects!

const feline = {
    name: "Eorah",
    age: "over a thousand",
    sound: "MEOW MEOW MEOW"
}

const canine = {
    name: "Bongo",
    age: "Timeless",
    sound: "BARK BARK BARK!!!"
}

const catDog = { ...feline, ...canine };
const dogCat = { ...canine, ...feline };

console.log(catDog); // This will only prints bongos object, Why?
//! If the spreadable objects contain matching Keys, THE VALUES OF THE LAST WILL
//! "WIN" OVER THE OTHERS!!!

console.log(dogCat); // This will only print feline object!

//? but if we add another key inline...
const catDog2 = { ...feline, ...canine, name: "Sir Duggles" };

console.log(catDog2); // "Sir Duggles" will "win" the battle for that key because it was LAST

//* What if you spread an array into an object?
const numbersCatDog = { ...catDog, ...numbers };

//? The INDEX of each number in the ARRAY becomes that entries KEY.
console.log(numbersCatDog); // '0': 1, '1': 4, etc.

//? Most common when you need to make a COPY of something
const dataFromForm = {
    email: "BongotheDog@rover.com",
    password: "biscuitboi666",
    username: "biscuitboi666",
}

//? This takes the data the user put in, and tacks on the information that I personally need
const newUser = { ...dataFromForm, id: 420, isAdmin: false };
console.log(newUser);

//* REST (it looks like spread, but it's not!)