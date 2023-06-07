const fs = require('fs');
fs.appendFileSync('./logging/logfile.txt', 'Got here!');

// function getGlobals() {
// 	fs.appendFileSync('./logging/logfile.txt', '***************WILL PRINT*************');
// }

module.exports.plugin = (on, config) => {
//     getGlobals();
    fs.appendFileSync('./logging/logfile.txt', 'WILL NOT PRINT');
//     getGlobals();
    return config;
};
