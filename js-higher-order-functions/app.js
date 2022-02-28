//* Scope
//? Variable "Visibility"
//? The location where a variable is defined 
//? dictates WHERE we will have access to that variable!

function totalEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}

//? THIS will print 6, because console.log(totalEggs)
//? is WITHIN SCOPE.
totalEggs();

//? THIS in a funny way will print [function: totalEggs]
//? since the VARIABLE "totalEggs" is out of scope,
//? it grabs the closest thing, which is the function!
console.log(totalEggs);

//! This is a unique example! For Semantic purposes,
//! Generally not a good idea to name variables the
//! Same as the function that variable is in!

//? Most functions work as STAND ALONE MACHINES

let bird = "Shoebill Stork";
function birdWatcher() {
    let bird = "Great Blue Heron";
    console.log(bird);
}

birdWatcher(); // Prints "Great Blue Heron" because SCOPE
console.log(bird); // Prints "Shoebill Stork"

