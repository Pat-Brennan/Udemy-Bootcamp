
//* For Loops!

//! This is the consistent Syntax and structure of a FOR LOOP

//? for (
//?     [initial expression]; Declare a starting point
//?     [condition]; Boolean logic to say how long it should loop
//?     [incrementExpression]; expression to move to the next index ++ = +1
//? )

//? i starts at 1, as long as it's less than or equal to 10,
//? it will increment i by 1, and LOOP again
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//? for loop that prints EVEN numbers
for (let i = 0; i <= 20; i += 2) { 
    console.log(i);
}

//? for loop that prints ODD numbers
for (let i = 1; i <= 21; i += 2) { 
    console.log(i);
}

//? for loop that counts down from 100
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

//? getting weird with it
//? i starts at 10, and as long as it's less than or equal to 1000, i * 10
for (let i = 10; i <= 1000; i *= 10) {
    console.log(i);
}

//* Infinite loops!

//! DO NOT RUN THIS
// for (let i = 20; i > 0; i++) { //? i will ALWAYS be greater than 0 being incremented by 1
//     console.log(i); //? creating infinity
// }
//! WHICH IS BAD!

//* Looping over Arrays

const animalBeers = [
    'Lions Head',
    'Dogfish Head',
    'Dirt Wolf',
    'Golden Monkey',
    'Grapefruit Sculpin',
    'Raging Eagle',
];

//? this will loop over each INDEX of the animalBeers array
//? could also be written as "i <= animalBeers.length - 1"
//? if left at "i <= animalBeers.length" you'll get an "undefined" at the end
for (let i = 0; i < animalBeers.length; i++){
    console.log(i, animalBeers[i]); //? i prints the index, animalBeers[i] prints the value
}

//? reverse it!

for (let i = animalBeers.length - 1; i >= 0; i--) {
    console.log(i, animalBeers[i]);
}

//* Nested For Loops!


//? i will run one cycle
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    //? and then j will run all of it's cycles
    for (let j = 1; j < 4; j++) { 
        console.log(`     j is: ${i}`)
    }
}

//* using a nested for loop to iterate through a class of students
const seatingChart = [
    ['Person', 'mitchell', 'scraggy'],
    ['john', 'jimmy', 'juggle'],
    ['jimbo', 'wiggle', 'cauliflower']
]

//? the first loop will grab the first array (the row of students)
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW ${i + 1}`);
    //? The second loop will then go through everything in that array (the students themselves)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
    //? and then do it all again!
}