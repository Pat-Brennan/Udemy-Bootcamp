//* Creating Promises

//? Step 1: Use the keyword "new"
//? Step 2: it is always passed a callback with TWO PARAMETERS
//? Step 3: These parameters themselves being callbacks, "Resolve" and "Reject"
//? Tip: These can be called whatever we want, but calling them resolve and reject is more semantic

// new Promise((resolve, reject) => {
//   // resolve() this would resolve the promise
//   // reject() this would reject the promise
// })

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		const rand = Math.random();
		setTimeout(() => {
			if (rand < 0.7) {
				resolve('YOUR FAKE DATA HERE');
			}
			reject('REQUEST ERROR');
		}, 1000);
	});
};

fakeRequest('/dogs/1')
	.then((data) => {
		console.log('We did it!');
		console.log(`Data is: ${data}`);
	})
	.catch((err) => {
		console.log('We didnt do it!');
		console.log(err);
	});

const delayColorChange = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
};

//? While it's always good to include a .catch, Not everything needs it! 

// delayColorChange('lightcoral', 2000)
// 	.then(() => {
// 		return delayColorChange('lightgreen', 2000);
// 	})
// 	.then(() => {
// 		return delayColorChange('magenta', 2000);
// 	})
// 	.then(() => {
// 		return delayColorChange('cyan', 2000);
// 	})
// 	.then(() => {
// 		return delayColorChange('violet', 2000);
// 	});

//? Same as above, but refactored with implicit return
delayColorChange('lightcoral', 2000)
  .then(() => delayColorChange('lightgreen', 2000))
	.then(() => delayColorChange('magenta', 2000))
	.then(() => delayColorChange('cyan', 2000))
	.then(() => delayColorChange('violet', 2000));