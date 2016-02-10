var http = require('http');

/*
Write a program that performs an HTTP GET request to a URL provided to you  
as the first command-line argument. Write the String contents of each  
"data" event from the response to a new line on the console (stdout).
*/
http.get(process.argv[2], function (result) {
    result.setEncoding('utf8');
    result.on('data', function(data) {
      console.log(data);
    });
    result.on('error', console.error);
});