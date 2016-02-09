var http = require('http');
var url = require('url');
var moment = require('moment');

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