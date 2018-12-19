var express = require('express');
var routerHTML = express.Router();
var path = require('path');

routerHTML.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

routerHTML.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
});

module.exports = routerHTML;