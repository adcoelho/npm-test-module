var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(result) {
    result.setEncoding('utf8');
    result.pipe(bl(function(err, data) {
        if (err) throw err;
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
