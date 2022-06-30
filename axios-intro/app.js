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