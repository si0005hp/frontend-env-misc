var lib = require('./lib.js');

const result = lib();
console.log(result);

document.getElementById("root").innerText = result;