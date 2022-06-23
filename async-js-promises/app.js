//* Promises!
//? First introduced to JS in 2015, 
//? a Promise is an object representing the eventual completion
//? or failure of an asynchronous operation.

const fakeRequestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Connection time out :(');
		} else {
			success(`Here is your fake data from ${url}`);
		}
	}, delay);
};

const fakeRequestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 4000) {
				reject('Connection Timeout :(');
			} else {
				resolve(`Here is your fake data from ${url}`);
			}
		}, delay);
	});
};

//* Example of callback hell
//? A success and failure callback for every nested function
//? Can be painful to look at and confusing!

// fakeRequestCallback(
// 	'books.com/page1',
// 	(response) => {
// 		console.log('It works ba-beee!'); // Successful callback function 😸
//     console.log(response);
//     fakeRequestCallback('books.com/page2', // 2nd level of nested functions
//       (response) => {
//         console.log("It worked again!!!")
//         console.log(response);
//         fakeRequestCallback('books.com/page3', // 3rd level of nested functions
//           (response) => {
//             console.log("Woah nelly!!!")
//             console.log(response)
//           },
//           (error) => {
//             console.log("Dooped again!")
//             console.log(error)
//         })
//       },
//       (error) => {
//         console.log(error);
//         console.log("No dice!")
//     })
//   },
// 	(error) => {
// 		console.log('It DOESNT work ba-beee!'); // Not so Successful Callback function 😿
//     console.log(error);
//   }
// );

//? A Promise is a returned object to which you attach callbacks,
//? INSTEAD OF passing callbacks into a function

//* .then and .catch
//? Chained together, the .then method gives the successful callback funcion
//? and the .catch method gives us the failure callback function

//! As you'll notice, this isn't much of an improvement compared to the above
// fakeRequestPromise('donuts.com/sprinkles')
//   .then(() => { // if promise is fulfilled,
//     console.log("GIIIVEE MEEE THE DONUTS!!!"); // this will run.
//     console.log("PROMISE RESOLVED!")
//     fakeRequestPromise('donuts.com/sprinkles/frosting')
//       .then(() => {
//         console.log("GIIIVEE MEEE THE FROSTING!!!"); // and this will run.
//         console.log("PROMISE RESOLVED!")
//         fakeRequestPromise('donuts.com/sprinkles/frosting/coffee')
//           .then(() => {
//             console.log("GIIIVEE MEEE THE COFFEEEE!!!"); // and this will run.
//             console.log("PROMISE RESOLVED!")
//           })
//           .catch(() => { // if promise is rejected
//             console.log("I CANT BELIEVE THIS"); // this will run.
//             console.log("PROMISE REJECTED!")
//         })
//       })
//       .catch(() => { // if promise is rejected
//         console.log("WHAT DO YOU MEAN THE COPS ATE THEM ALL AGAIN???"); // this will run.
//         console.log("PROMISE REJECTED!")
//     })
// })
//   .catch(() => { // if promise is rejected,
//     console.log("WHAT DO YOU MEAN THE COPS ATE THEM ALL???"); // this will run.
//     console.log("PROMISE REJECTED!")
//   })


//? What if there was another way!

//? Same as the above 
fakeRequestPromise('donuts.com/')
  .then((data) => { // Promises are fulfilled or rejected with a VALUE i.e "data"
    console.log(data)
    console.log("Sprinkles!")
    return fakeRequestPromise('donuts.com/sprinkles') // the following .then is chained here
  })
  .then((data) => {
    console.log(data)
    console.log("Frosting!")
    return fakeRequestPromise('donuts.com/sprinkles/frosting')
  })
  .then((data) => {
    console.log(data)
    console.log("Coffee!")
    return fakeRequestPromise('donuts.com/sprinkles/frosting/coffee')
  })
  .catch((err) => { // if something goes wrong at any point, this catch runs
    console.log("YOU GET NOTHING!")
    console.log(err)
})