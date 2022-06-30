//* Axios !
//? A LIBRARY built on top of JS for making HTTP Requests
//? Since it's built on top of JS we have to IMPORT IT (because it's not native)
//? We've done so with a CDN(content delivery network) in our index.html
//? but we also could have run "npm install axios" or "npm i axios"

//* Making requests with axios

//? GET

axios.get('https://swapi.dev/api/people/1/').then((res) => {
  console.log('RESPONSE:', res); // this GETS and the information AND Parses the JSON
}) // unlike fetch, where we needed .json() to parse that data.
  .catch((e) => {
    console.log("ERRRROR!", e);
  });

//? GET as an Async Function

const theDroidImLookingFor = async () => {
  const res = await axios.get('https://swapi.dev/api/people/3')
  console.log("YOU ARE THE DROID I WAS LOOKING FOR!", res.data);
};

theDroidImLookingFor();

//? Refactored to be more versatile

const theDroidImLookingFor2 = async (id) => {
  try { // always remember a try and a catch
    const res = await axios.get(`https://swapi.dev/api/people/${id}`); // added id with template literal
    console.log("YOU ARE THE OTHER DROID I WAS LOOKING FOR", res.data);
  } catch {
    console.log("HYPER DRIVE FAILING")
  }
}

theDroidImLookingFor2(2);

//* Curating HEADERS with Axios
//! NOT ALL APIS NEED YOU TO SPECIFY A SPECIFIC HEADER. READ THE DOCS!

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement('li'); // create the li
  newLI.append(jokeText); // makes its text = the dad joke
  jokes.append(newLI); // add the li to the list of jokes
}
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } } // object in object to configure header
    const res = await axios.get('https://icanhazdadjoke.com/', config); // axios.get() takes two arguments. The second being configuration of request.
    // console.log(res.data.joke); // using dot notataion to access JUST THE JOKE in the objects
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE!"
  }
}

getDadJoke();

button.addEventListener('click', addNewJoke)