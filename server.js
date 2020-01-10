// run server.js
// https://github.com/expressjs/morgan
var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var morgan = require('morgan');


var rfs = require('rotating-file-stream');

// setup winston logging
var logger = require('./logger');
logger.debug('Overriding express logger');


// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream('./logs/access.log', {flags: 'a'})
// create stream
var accessRotateLogStream = rfs.createStream('./logs/file.log',{
    size: "300B", // rotate every 10 MegaBytes written
    interval: "1d", // rotate daily
    compress: "gzip", // compress rotated files
})


app.use(morgan('dev'));

// setup the logger
// you can substitute in accessLogStream or accessRotateLogStream to try out rfs or non rotated logs
app.use(morgan('combined', {stream: logger.stream})); 

app.get('/', function(req, res){
    res.send('hello, world!');
});

app.listen(port);
console.log('Server running on port: ' + port);
