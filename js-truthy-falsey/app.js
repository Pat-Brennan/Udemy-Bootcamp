//* Truthy and Falsey

const userInput = prompt("Enter something!")

//? If a user just clicks enter upon prompt, userInput will equal "" which is inherently falsey
//? Everything is Truthy other than the examples below(0, null, NaN, undefined, "")

//? Truthy if userInput contains anything 
if (userInput) {
    console.log("THE TRUTHY!");
} else {
    console.log("THE FALSEY!");
}
//? Falsey
if (0) {
    console.log("THE TRUTHY!");
} else {
    console.log("THE FALSEY!");
}
//? Falsey
if (null) {
    console.log("THE TRUTHY!");
} else {
    console.log("THE FALSEY!");
}
//? Falsey
if (NaN) {
    console.log("THE TRUTHY!");
} else {
    console.log("THE FALSEY!");
}
//? Falsey
if (undefined) {
    console.log("THE TRUTHY!");
} else {
    console.log("THE FALSEY!");
}