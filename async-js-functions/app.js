//* Async functions!
//? A newer and clearer syntax for working with async code!
//? Syntax "makeup" for promises i.e "Syntactic Sugar"

//* The Async Keyword
//! Async functions always return a promise!
//? If the funcion returns a value, the promise will be resolved with the value.
//? If the function throws an exception, the promise will be rejected.

//? This will return a promise, EVEN WITH NOTHING IN IT!
//? The async keyword AUTOMATICALLY CREATES A PROMISE
async function hello() {}

//? async written with arrow function
const sing = async () => {
	// throw 'OH NO IVE BEEN REJECTED' // this will return a rejected promise
	return 'NEVER GONNA GIVE YOU UP!'; // this will return a fulfilled promise
};

//? return = fulfilled promise
//? throw = rejected promise

//? "data" being the string that sing is returning
sing()
	.then((data) => {
		console.log(`Promise resolved with: ${data}`);
	})
	//? "err" being the data from the throw within the async function
	.catch((err) => {
		console.log(err);
		console.log('PROMISE REJECTED!');
	});

//* A more realistic example

//? Checking for a username and password in a database could take time
const login = async (username, password) => {
	if (!username || !password) {
		throw 'MISSING CREDENTIALS';
	}
	if (password === 'letmein!') {
		return 'WELCOME!';
	} else {
		throw 'invalid password!';
	}
};

login('Bemo123', 'Imthewrongpassword!');

//* The await keyword
//? We can only use the await keyword inside of functions declared with async
//? await will PAUSE the execution of the function, WAITING FOR A PROMISE TO BE RESOLVED

const changeBackgroundColor = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
};


//? changeBackgroundColor already resolves a promise
//? await is just saying, "I'll do stuff when a promise is resoved"
const rainbow = async () => {
	await changeBackgroundColor('red', 2000)
	await changeBackgroundColor('orange', 2000)
	await changeBackgroundColor('yellow', 2000)
	await changeBackgroundColor('green', 2000)
	await changeBackgroundColor('blue', 2000)
	await changeBackgroundColor('indigo', 2000)
  await changeBackgroundColor('violet', 2000)
  return "ALL DONE!"
};

rainbow().then(() => console.log("END OF RAINBOW! YOU DID IT"));


// async function printRainbow() {
//   await rainbow(); // wait for rainbow to run
//   console.log("END OF RAINBOW! YOU DID IT!") // then print
// }