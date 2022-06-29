//* XHR = XMLHttpRequest
//? The "original" way of sending requests via JS.
//? Does not support promises so... lots of callbacks
//? Clunky Syntax!
//! Look out for the capitalization of stuff

//!  Not super important to remember how to do this!


//*The Process

//? First, create a new XMLhttpRequest

const req = new XMLHttpRequest();

// callback for onload
req.onload = function () {
  console.log("WE SUCCEEDED!"); // show the request works
  data = JSON.parse(this.responseText); // convert the acuired JSON to JS Object
  console.log(data); // then print what you need
  console.log(data.name, data.height, data.hair_color);
  console.log(data.name[3]);
}
// callback for errors
req.onerror = function () {
  console.log("WE DID NOT SUCCEED!");
  console.log(this);
}

//? Second, Open that request
//? 1st arg = type of request, 2nd arg = where request is being made
req.open("GET", "https://swapi.dev/api/people/1/") 

//? Third, send it!
req.send(); 


//! All of this... for one request!

//? XMLHttpRequest has widely been replaced by Fetch
