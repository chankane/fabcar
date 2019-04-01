var express = require('express');
var app = express();

var fs = require('fs');
var https = require('https');
var query = require('./query.js');
var options = {
  key:  fs.readFileSync('./test.key'),
  cert: fs.readFileSync('./test.cert')
};
var server = https.createServer(options,app);

app.get('/', function (req, res) {
    res.end("Hello World.");
});
app.get('/query', function (req, res) {
    query.getAllCars((resq) => res.send(resq));
});
server.listen(443);
console.log("listened...");
