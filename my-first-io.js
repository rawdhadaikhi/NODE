var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var str = file.toString().split('\n').length -1;



console.log(str);
