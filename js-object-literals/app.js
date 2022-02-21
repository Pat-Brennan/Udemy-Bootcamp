//* Objects!

//? Example Object
//? Order does not matter
//? Information(666) is accessed by a KEY(totalSteps)
//? Think of an amorphous blob(fitBitData) of information with stuff just floating around to be grabbed
const fitBitData = {
	totalSteps: 666,
	totalMiles: 420,
	timesFarted: 800,
};

//? Some real life examples for the use of a Key-pair
const exampleKeyPairs = {
	username: "Dumpy69",
	upVotes: 7777,
	text: "hey man great post! wah wah wah!",
};

//* Object-Literal: Objects can be a loaded term in JS.
//* Object-Literal specifically refers to an object containing key-value pairs

//? VALUES can be any type you want WITHIN THE SAME OBJECT
const person = {
    firstName: "Mick",
    lastName: "Jagger",
    age: 69,
    kids: ["Loosey", "Goosey", "Larry"],
    willEverDie: false,
};

//* Accessing information within the object

//! You might think this, but {} are only used when DECLARING the object

//? First Option: using [] brackets with "" (confusing)
console.log(person["firstName"]);
console.log(person["age"]);

//? Second Option: using Dot( . ) notation! (less confusing)
console.log(person.firstName); //? does the same as bracket notation
console.log(person.age); //? but looks and makes more sense

//! ALL KEYS ARE CONVERTED TO STRINGS WHEN CREATING OBJECT LITERALS

const years = {
    1994: "GOOD", //? The key 1994 will be converted to a string(even though it was a number)
    2020: "BAD", //? Same with 2020
    true: "really?", //? Even booleans
    null: "Oh Geez", //? That's right, null will also turn into a string
}

console.log(years[2020]); //? Missing quotes? Still prints value of 2020 lmao
console.log(years[true]); //? and this works too
console.log(years.null); //? Even this. Oooo JavaScript * Face palm *

//* [] allow you to input an EXPRESSION

//? It can get weird, but if you want use a variable to be more dynamic
//? when accessing keys, the [] actually work better.
console.log(person["first" + "Name"]);

//* updating the VALUE of a KEY within an OBJECT

const midterms = {
    lucy: 80,
    jERRgulL: 1000,
};

//? This will update jERRgulL
midterms.jERRgulL = 80085;
console.log(midterms);

//? Or even change the data type
midterms["jERRgulL"] = "A++"
midterms["lucy"] = "FFFF"
console.log(midterms);

//? Or update the object with another Key-value pair
midterms.evan = 400;
midterms.jOSHER = null;
midterms["munster"] = 0;
console.log(midterms);

//* Nesting objects within arrays and arrays within objects

//? an array of objects
const comments = [
    {
        user: "Bill",
        text: "LOLOLOLOL",
        votes: 69,
        powers: { //? object in an object! 
            earth: false,
            fire: true,
            water: false,
            air: false
        }
    }, //! Comma between objects!!!
    {
        user: "Jill",
        text: "LOLOLOLOLOLOLOLOL",
        votes: 420,
        powers: {
            earth: true,
            fire: false,
            water: false,
            air: false
        }
    },
    {
        user: "Kill",
        text: ":O",
        votes: -666,
        powers: {
            earth: true,
            fire: true,
            water: true,
            air: true
        }
    }
]

//? To access the OBJECT within the ARRAY
//? We must find the INDEX of the object, and then the KEY that we want
console.log(comments[0].text); //? prints LOLOLOLOLOLOL
console.log(comments[1].votes); //? prints 420
console.log(comments[2]["user"]); //? This would also work!