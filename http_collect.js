var http = require('http');
var bl = require('bl');

/*
Write a program that performs an HTTP GET request to a URL provided to you  
as the first command-line argument. Collect all data from the server (not  
just the first "data" event) and then write two lines to the console  
(stdout).  

The first line you write should just be an integer representing the number  
of characters received from the server. The second line should contain the  
complete String of characters sent by the server.
*/
http.get(process.argv[2], function(result) {
    result.setEncoding('utf8');
    result.pipe(bl(function(err, data) {
        if (err) throw err;
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
