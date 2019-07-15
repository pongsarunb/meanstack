/*

//Example 9_2_1

var connect = require('connect');
var app = connect();
var helloWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};
app.use(helloWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');
*/
/*
//Example 9_2_2
var connect = require('connect');
var app = connect();
var logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
};
var helloWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};
app.use(logger);
app.use(helloWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');
*/

//Example 9_2_3
var connect = require('connect');
var app = connect();
var logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
};
var helloWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};
var goodbyeWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
};
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');
    
