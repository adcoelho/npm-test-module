var filtered_ls = require('./filtered_ls_module');

/*
Create a program that prints a list of files in a given directory,  
filtered by the extension of the files. The first argument is the  
directory name and the second argument is the extension filter. Print the  
list of files (one file per line) to the console. You must use  
asynchronous I/O.  

You must write a module file to do most of the work.
*/
filtered_ls(process.argv[2], process.argv[3], function (err, data) {
    if (err) throw err;
    for (var i = 0; i < data.length; i++)
        console.log(data[i]);
});