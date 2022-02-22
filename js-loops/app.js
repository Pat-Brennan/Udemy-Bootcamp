
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

