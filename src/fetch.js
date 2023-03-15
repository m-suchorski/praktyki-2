const axios = require("axios");

async function fetchApi() {
    const API_ROUTE = 'https://pokeapi.co/api/v2/pokemon';
    const response = await axios.get(API_ROUTE);
    response.data.results.forEach(pokemon => console.log(pokemon.name));
}

module.exports ={ fetchApi };
