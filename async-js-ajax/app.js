//* AJAX
//? Asynchronus JavaScript and XML
//? A means to update the webpage without needing to reload
//? Example: Scrolling through reddit, hittin the bottom, and new posts are loaded.

//* API
//? Application Programming Interface
//? Broad term for any computer to communicate with another piece of software.
//? Can also be software to software, doesn't need to be computers!

//* Web API
//? Also an Application Programming Interface
//? But occurs specifically over HTTP Requests
//? to URLS. (also known as endpoints)

//* XML
//? Extendable mark-up language
//? Similar looking to HTML, but the tags could be called anything
//? Not commonly used anymore. Most things are now JSON
//? Ex: <products> *List of products here* </products>

//* AJAJ
//? Asynchronous JavaScript and JSON
//? Less catchy, but more than likely what people are referring to
//? when they say AJAX.

//* JSON
//? JavaScript Object Notation
//? A way of formatting data that is consistent and predictable
//? JSON and JavaScript are identical, but not the same.
//? JSON IS NOT JUST FOR JS, OTHER LANGUAGES (LIKE PYTHON) ALSO USE IT

//? Ex:

// {
//   "squadName" : "Super Hero Squad", //? EVERYTHING IS DOUBLE QUOTES
//   "formed" : 2022, //? Numbers are cool
//     "active" : true, //? Booleans are fine
//     "members" : [ //? Arrays work
//       "Antman",
//       "Moleman",
//       "Dr.ZigZag"
//     ]
// } //! But you cannot use undefined!

//* How to turn JSON into valid JS object
const data =
	`{"ticker":{"base":"BTC","target":"USD","price":"20750.00977783","volume":"7371.61960629","change":"82.52480647"},"timestamp":1656435845,"success":true,"error":""}`

const parsedData = JSON.parse(data)
  
console.log(parsedData.ticker.price);

//* How to turn JS into valid JSON
const cat = { breed: 'domestic short hair', sound: 'MEOW MEOW MEOW', isAlive: true }

const catJSON = JSON.stringify(cat);

console.log(catJSON);
