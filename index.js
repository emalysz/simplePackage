const fs = require('fs');
fs.appendFileSync('./logging/logfile.txt', 'Got here!');

module.exports.plugin = (on, config) => {
    fs.appendFileSync('./logging/logfile.txt', 'module.exports.plugin');
    return config;
};

module.exports.lifecycle = () => {
  fs.appendFileSync('./logging/logfile.txt', 'module.exports.lifecycle');
};


function helloWorld() {
  console.log('Hello World from this npm package');
}

module.exports = helloWorld;
