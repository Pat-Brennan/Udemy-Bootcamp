
//? "event" within our function, will console log the exact clicking event that
//? occurred, with all of its detail. (X, Y Coordinates etc.)
document.querySelector('button').addEventListener('click', function (event) {
    console.log(event);
});

//? This is typically used for monitoring keyboard events, like in games!

const input = document.querySelector('input');

//? Will log when key is pressed down
input.addEventListener('keydown', function (e) {
    console.log(e);
})

//? Will log when key is pressed up
input.addEventListener('keyup', function (e) {
    console.log(e.key); // which KEY was pressed
    console.log(e.code); // corresponding CODE to that KEY
})

//? CODE determines the location of the KEY on the board.
//? but the KEY can represent something else. (mapping 'Q' to be 'S' for example);
//? the CODE would still be 'KeyQ'

// window.addEventListener('keydown', function (e) {
//     console.log(e.code)
// })

//? Using Switch/Case to listen for specific things
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("Straight to the top!!")
    }
})