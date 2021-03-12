const axios = require('axios');

// We use dependency injection for axios, so that we can swap it out for a fake
// version in our tests.
function fetchData(myAxios = axios) {
  return myAxios.request({
    method: 'GET',
    url: 'http://localhost:9615/data.json',
  }).then((response) => {
    return processData(response.data)
  });
}

function processData(data) {
  let lengthOfHello = data.hello.length;
  return `Length of the 'hello' key is ${lengthOfHello}`;
}

module.exports = fetchData;
