const axios = require('axios') // Non-relative files are imported without using ./

const API_URL = 'https://pokeapi.co/api/v2'

const fetchSomeData = async () => {
  const { data } = await axios.get(`${API_URL}/pokemon`)

  console.log(data)
}

module.exports = fetchSomeData // Define what is exported from this file. File does not have to export everything.

// This file exports the `fetchSomeData` but does not export API_URL. In other files you can only import and use things that were exported.
