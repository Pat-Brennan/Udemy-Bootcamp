const fakeRequestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			console.log('Connection time out :(');
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
