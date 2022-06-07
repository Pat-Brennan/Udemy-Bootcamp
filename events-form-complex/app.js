//* .preventDefault() method of the event interface tells the user agent that if
//* the event does not get explicitly handled, its default action should not
//* be taken as it normally would be

//! FUN FACT: "USER AGENT" = COMPUTER PROGRAM REPRESENTING PERSON AKA THE BROWSER

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
	//? .preventDefault() will keep submit from bringing you to new page
	e.preventDefault();
	// console.log("IM SUBMIT")

	// const usernameInput = document.querySelectorAll('input')[0]
	// const tweetInput = document.querySelectorAll('input')[1]
	// console.log(usernameInput.value, tweetInput.value);

	const username = tweetForm.elements.username.value;
	const tweet = tweetForm.elements.tweet.value;
	addTweet(username, tweet);
});

const addTweet = (username, tweet) => {
	const newTweet = document.createElement('li');
	const bTag = document.createElement('b');
	bTag.append(username);
	newTweet.append(bTag);
	newTweet.append(`- ${tweet}`);
	tweetsContainer.append(newTweet);
};
