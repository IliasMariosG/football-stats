const fetchData = require('./fetch');

fetchData().then(data => {
  console.log(data)
}).catch(console.error)
