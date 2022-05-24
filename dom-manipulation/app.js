const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'A LINK!'
    link.style.color = 'red'
    link.style.textDecorationColor = 'cyan'
    link.style.textDecorationStyle = 'wavy'
}

// for (let link of allLinks) {
//     link.style.color = 'cyan'
// }