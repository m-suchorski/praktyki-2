const axios = require("axios");
const API_ROUTE = "https://pokeapi.co/api/v2/pokemon";

async function fetchApi() {
  const response = await axios.get(API_ROUTE);
  response.data.results.forEach((pokemon) => console.log(pokemon.name));
}

module.exports = { fetch: fetchApi, apiRoute: API_ROUTE };
