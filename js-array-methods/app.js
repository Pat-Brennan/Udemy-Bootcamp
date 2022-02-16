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
