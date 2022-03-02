//* Try/Catch
//? Two statements that TRY to CATCH errors!

//? This by itself will throw an error, because hello is not defined!
// hello.toUpperCase();

//? But When wrapped in a TRY block...
try {
	hello.toUpperCase;
} catch {
	console.log("OH NOOO ERRRORRRRRR!");
}

//? It TRIES the suspected code, and CATCHES the anticipated error
//? This helps for more descriptive and informed trouble shooting
//? This will also KEEP YOUR CODE RUNNING INSTEAD OF STOPPING AT THE ERROR!!!

//! YOU CANNOT HAVE A TRY WITHOUT A CATCH!

function scream(msg) {
	try {
		console.log(msg.toUpperCase().repeat(5));
	} catch {
		console.log("INPUT MUST BE STRING");
	}
}

scream("Hellllllp!"); // Prints HELP a bunch of times
scream(666); // gets CAUGHT and will not process the number
scream("icecream!"); // This still runs because the error was CAUGHT
