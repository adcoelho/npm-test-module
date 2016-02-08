var fs = require('fs');

var my_buffer = fs.readFileSync(process.argv[2], 'utf8');

console.log(my_buffer.split('\n').length - 1);