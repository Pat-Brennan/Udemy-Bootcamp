const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         button.style.backgroundColor = makeRandomColor();
//         button.style.color = makeRandomColor();
//     })
// }

const h1 = document.querySelectorAll('h1');

// for (let h of h1) {
//     h.addEventListener('click', function () {
//         h.style.color = makeRandomColor()
//         h.style.backgroundColor = makeRandomColor()
//     })
// }

//? Utilizing the Keyword THIS to get rid of repeated logic

function colorize() {
    this.style.color = makeRandomColor();
    this.style.backgroundColor = makeRandomColor();
}

//? Same as above loops, but with less repeated logic
for (let button of buttons) {
    button.addEventListener('click', colorize);
}

for (let h of h1) {
    h.addEventListener('click', colorize);
}