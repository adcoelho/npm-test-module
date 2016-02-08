var fs = require('fs');
var path = require('path');

module.exports = function (dir, extension, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err, null);
        var array = [];
        for (var i = 0; i < files.length; i++)
            if (path.extname(files[i]) === '.' + extension)
                array.push(files[i]);
        callback(null, array);
    });
}