
//? Behold! A boat load of callbacks!
// setTimeout(() =>
//   document.body.style.backgroundColor = 'red');

// setTimeout(() =>
//   document.body.style.backgroundColor = 'orange', 2000);

// setTimeout(() =>
//   document.body.style.backgroundColor = 'yellow', 3000);

// setTimeout(() =>
//   document.body.style.backgroundColor = 'blue', 4000);

// setTimeout(() =>
//   document.body.style.backgroundColor = 'indigo', 5000);

// setTimeout(() =>
//   document.body.style.backgroundColor = 'violet', 6000);

  //? But what if we didn't want to math out the seconds?

  //? This works, but the result is a boat load of nesting stuff aka Hell
// setTimeout(() => {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'yellow';
//       setTimeout(() => {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(() => {
//           document.body.style.backgroundColor = 'blue';
//         },1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000);

//? What if we were to write the same as above, but in a more reusable way?

const newBackground = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext();
  }, delay);
};

//? Still not great, but it works!
newBackground('red', 1000, () => {
  newBackground('orange', 1000, () => {
    newBackground('yellow', 1000, () => {
      newBackground('green', 1000, () => {
        newBackground('blue', 1000, () => {
  
        })
      })
    })
  })
})

//? Generally this level of nesting is bad, but it does happen!

//* Movie Example

//? It is very common to write callback functions for both SUCCESS and FAILURE
searchMoviesAPI('batman', () => {
  saveToMyDB(movies, () => {
    // If it works, run this!
  }, () => {
    // If it doesn't work, run this!
  })
});