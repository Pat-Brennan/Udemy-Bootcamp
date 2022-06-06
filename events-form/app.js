const form = document.querySelector('#shelterForm');
form.addEventListener('submit', function (e) {
    //? Prevent Default will keep the form submission from executing it's default behavior
    e.preventDefault();

    //? Without Prevent Default, the get request would fire, but then throw an error
	console.log('SUBMITTED');
});
