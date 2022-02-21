//* Updating an array at it's index

const days = ["Monday", "Tuesday", "Wednesday"];

//? This will give you the value at that index(Tuesday)
// console.log(days[1]);

//? Running this will read left to right, What Array?(days) What index?(Tuesday),
//? What index in that value?(a)
// console.log(days[1][5]);

//? Arrays can be updated, and potentially change the entire element!
days[0] = "Mondayz";
console.log(days);

//? updating a slot that does not exist will result in the creation of empty slots
//? in other words, this will create 7 empty slots and put satans birthday in index 10
days[10] = "Satans Birthday";
console.log(days);

//* Push: Add to the end of the Array without knowing the index

days.push("JArg", "MEEAD");
console.log(days);

//* Pop: remove an item from end of array, but not delete it
//* In other words, it can be captured in a variable

//? We're "popping off" the end of days, and putting it in the "beer" container(variable)
let beer = days.pop();
console.log(beer);

//* Shift: REMOVES from the beginning of the Array
//* Consider it like a first person to last person in line situation

//? Like pop we don't need to pass it anything, it will just remove the first element
//? we can also capture it in a separate variable
let removedDay = days.shift();
console.log(days);
console.log(removedDay);

//* Unshift: ADDS to the beginning of the Array(or our metaphorical waiting line)
days.unshift("Garfield");
console.log(days);

//! PUSH, POP, SHIFT, AND UNSHIFT are derived from terms used in Computer Science
//! when working with STACKS and QUEUES

//* Concat: It takes two arrays, combines them, then returns a NEW array.

let doggos = ["Roger", "BOngo", "Rex"];

//? This will take doggos, CONCATENATE it with days, and produce a NEW array
//! doggos and days will still exist and be unchanged, but now we have a NEW array called 'doggoDays'
let doggoDays = doggos.concat(days);
console.log(doggoDays);

//* Includes: This is a BOOLEAN method that will take an array and inspect it to see
//* if it has a certain value among it's entries, then returns TRUE or FALSE

console.log(doggos.includes("Roger")); //? prints TRUE
console.log(doggos.includes("Frisco")); //? prints FALSE

//* indexOf: returns given index of the FIRST matched entry found in the array
//* will return -1 if the entry isn't found

console.log(doggos.indexOf("Roger")); //? prints 0
console.log(doggos.indexOf("Frisco")); //? prints -1

//* Reverse: This will reverse the array "in place"
//! Be Carful: This method will alter the original array, hence "in place."
//! This is also known as a "Destructive" method

console.log(doggos.reverse()); //? reverses the order of array
console.log(doggos); //? proves that original has been altered

//* Slice: returns a "shallow copy" of a portion of an array in a new array object
//* passed two indices(a start, and an end), it will grab everything in that RANGE
//* includes the START but does NOT include the STOP i.e .slice(2, 4) includes 2 but not 4
//* When passed a negative number, it will slice from the END of the array

doggos.push("frisco");
console.log(doggos.slice(1)); //? returns ['rex', Bongo, roger]
console.log(doggos.slice(0, 2)); //? returns [rex, bongo]
console.log(doggos.slice(-1)); //? returns ["frisco"]

//* Splice: used to insert or delete entries at specific indices in the array
//* .splice(starting point, what to delete if anything, content to be added)
//! This method is destructive and will alter original array

console.log(doggos.splice(1, 0, "MOUNTAIN")); //? Adds MOUNTAIN at index 1 and removes nothing
console.log(doggos);
console.log(doggos.splice(3, 1)); //? removes Roger at index 3
console.log(doggos);
console.log(doggos.splice(2, 0, "Cobalt", "Trix")); //? adds multiple entries at index 2
console.log(doggos);

//* Sort: Sorts the elements of the array IN PLACE and converts all elements to strings
//* This brings on a janky way of sorting by using UTF-16 codes

let scores = [1, 42, 400, 420, 666, 80085];
scores.sort();
console.log(scores); //? Numbers will be converted to strings then sorted
console.log(doggos.sort()); //? Sorted using UTF-16 codes

//! Worth noting, CONST only cares the variable remain unchanged, not the contents inside

const nums = [1, 2, 3];
nums.push(4); //? This will add 4 to nums array
console.log(nums);
// nums = 3; //? This will throw an error because I cannot reassign nums

//* Nested Arrays: Arrays inside of other arrays, a box within a box!

const gameBoard = [
	["X", "O", "X"],
	["O", "O", "X"],
	["O", "X", "X"], //? X has won!
];

console.log(gameBoard[1][1]); //? Use square brackets to "open up" the boxes and get the stuff inside!
