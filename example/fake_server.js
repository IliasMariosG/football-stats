var http = require('http')
var url = require('url')
var fs = require('fs')

// This is just a fake server for purposes of illustration, you shouldn't need
// to use it.

http.createServer(function (request, response) {
    var requestUrl = url.parse(request.url)
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200)
    fs.createReadStream('./data.json').pipe(response)  // do NOT use fs's sync methods ANYWHERE on production (e.g readFileSync)
}).listen(9615)

console.log("Server is running");
