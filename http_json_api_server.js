var http = require('http');
var url = require('url');
var moment = require('moment');

/*
Write an HTTP server that serves JSON data when it receives a GET request  
to the path '/api/parsetime'. Expect the request to contain a query string  
with a key 'iso' and an ISO-format time as the value.  
*/
var server = http.createServer( function (request, response) {
    var parsed_url = url.parse(request.url);
    var date = new Date(parsed_url.query.substring(4));
    var result = "";
    if (parsed_url.pathname === '/api/unixtime') {
        result = JSON.stringify({
            "unixtime": date.getTime()
        });
    } else {
        result = JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        });
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(result);
});

server.listen(process.argv[2]);