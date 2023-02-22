const http  = require('http');

const fun = require('./req_handler.js');

// creating server
const server = http.createServer(fun);
 
//server listening to port 3000
server.listen(3000);