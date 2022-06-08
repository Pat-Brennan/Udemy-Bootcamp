const input = document.querySelector('input');
const h1 = document.querySelector('h1');

//? CHANGE is describing if it is different by the time you LEAVE that input
//? i.e *input text in textbox* then click away, *change event listener fires*
input.addEventListener('change', function (e) {
	console.log('MAMA MIA!');
});

//? INPUT is describing whenever something NEW is placed in the textbox
//? i.e Type B *input event fires* type A *input event fires* type T... and so on
//? Continue until you've spelled B A T M A N
input.addEventListener('input', function (e) {
    h1.innerText = input.value
});

//? INPUT is especially useful in Copy and pasting, because that counts as INPUT!

h1.addEventListener('click', function (e) {
    console.log("Woah Hey!")
});