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