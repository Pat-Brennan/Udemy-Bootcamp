const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
	//? Prevent Default will keep the form submission from executing it's default behavior
	e.preventDefault();

	//? this will check what the current value of INPUT is
	// console.log(input.value);

	//? Without Prevent Default, the get request would fire, but then throw an error
	console.log('SUBMITTED');

	//? Assign the input value to a variable
	const catName = input.value;

	//? Logic to create new LI
	const newLI = document.createElement('LI');

	//? Set the text of LI = to the input value
	newLI.innerText = catName;
	console.log(catName);

	//? At the name to an existing list
	list.append(newLI);

	//? After Submission, get rid of the text in the input box
	input.value = '';
});
