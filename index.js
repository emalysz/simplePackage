console.log("In index.js");
const fs = require('fs');
fs.mkdirSync("./logging");
fs.appendFileSync('./logging/logfile.txt', 'Got here!');


function helloWorld() {
  console.log('Hello World from this npm package');
}

module.exports = helloWorld;
