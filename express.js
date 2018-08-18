

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;
require('./routes/html_routes')(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [
    {
    routeName: "lars",
    name: "Lars Ulrich",
    phone: 1800-"Drumset",
    email: "drums@metallica.com",
    uniqueID:"001200"
    },
    {
    routeName: "dude",
    name: "The Dude",
    phone: 818-818-8888,
    email: "whiterussiansforlife@dude.com",
    uniqueID:"0011110"
    },
];
var waitlist = [
    {
    routeName: "others",
    name: "Not cool people",
    phone: 1234567890,
    email: "me@me.com",
    uniqueID:"102000"
    },
    {
    routeName: "none",
    name: "One person",
    phone: 1234561234,
    email: "no@non.com",
    uniqueID:"1234"
    },
];

//api routes
app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    tableArray.push(newReservation);
});

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
    // return reservations;
});

//start the app
app.listen(port, function() {
    console.log("App listening on port " + port);
});