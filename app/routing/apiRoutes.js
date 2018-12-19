var express = require('express');
var routerAPI = express.Router();
var path = require('path');
var person = require('../data/friends');
var totalDifference = 0;
var comparing = [];

routerAPI.get('/api/friends', function (req, res) {
    res.json(person);
});

routerAPI.post('/survey', function (req, res) {
    var people = req.body;
    person.push(people);
    res.json(true);
});

for (var i = 1; i < person.length; i++) {
    var totalDifference = 0;
    for (var j = 0; j < person[0].scores.length; j++) {

        var number = parseInt(person[0].scores[j]) - parseInt(person[i].scores[j]);
        if (number < 0) {
            number *= (-1);
            totalDifference += number;
        } else {
            totalDifference += number;
        }
    }
    comparing.push(totalDifference);

};

var myFriend = Math.min.apply(null, comparing);
var index = comparing.indexOf(myFriend);

console.log(person);
console.log(comparing);
console.log(myFriend);
console.log(index);


module.exports = routerAPI;