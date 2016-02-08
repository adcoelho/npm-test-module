var net = require('net');
var strftime = require('strftime');

var my_server = net.createServer(function (socket) {
    socket.end(strftime('%Y-%m-%d %H:%M\n'));
});

my_server.listen(process.argv[2]);