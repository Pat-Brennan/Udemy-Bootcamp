const btn = document.querySelector('#v2');

//? Utilizing JS to execute clg when btn is clicked
btn.onclick = function () {
	console.log('WOAH NELLY!!!');
	console.log('Lets hope this works!');
};

//? function to do a Kamehameha wave
function scream() {
	console.log('KAAAA MEEEEH...');
	console.log('HAAAA MEEEEH...');
	console.log('HAAAAAAAAAAA!!!');
	console.log('🔥🔥🔥');
}

//? onmouseenter means anytime your cursor goes near the button...
//? Goku is unleashed.
btn.onmouseenter = scream;

//? Just to demonstrate that you can put onclick on pretty much anything...
document.querySelector('h1').onclick = function () {
	alert('LOOK OUT BOO!');
};

const btn3 = document.querySelector('#v3');

//* .addEventListener(type, listener);
//* .addEventListener(type, listener, options);
//* .addEventListener(type, listener, useCapture);

//? .addEventLister() is like the swiss army knife of event listeners
//? The 1st arg is what behavior to listen for(in this case click)

//! 'click' in this case is totally separate from .onclick!!!

//? The 2nd arg is passing in a function to say what to do when behavior occurs
btn3.addEventListener('click', function () {
	console.log('It really happened!!!');
	console.log('I got clicked!!!');
});


function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector('#tas');
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);

//? .addEventListener is the most commonly used (as opposed to .onclick)