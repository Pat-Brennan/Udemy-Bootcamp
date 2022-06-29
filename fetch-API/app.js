//* Fetch API
//? The newer way of making HTTP requests via JS
//? Supports Promises
//! Not Supported in Internet Explorer!(like most things)

// fetch('https://swapi.dev/api/people/1') //? fetch creates a promise
//   .then((res) => {
//     //? but that promise might resolve before you have any data...
//     console.log("RESOLVED!", res);

//     //? .json() also returns a promise and grabs the data before that promise is resolved
//     res.json().then((data) => console.log("JSON DONE", data))
//   })
//   .catch((e) => {
//     console.log("ERROR ERROR!", e);
// })

//* Refactored with Async

//? Remember: With async functions, it's always good to have a TRY and a CATCH
const loadStarWarsPeople = async () => {
	try {
		const res = await fetch('https://swapi.dev/api/people/1'); // Wait for the promise
		const data = await res.json(); // convert the data to json
		console.log(data); // then print

		const res2 = await fetch('https://swapi.dev/api/people/2');
		const data2 = await res2.json();
		console.log(data2);
	} catch (e) {
		console.log("THESE ARE NOT THE DROIDS YOU'RE LOOKING FOR ", e);
	}
};

loadStarWarsPeople();
