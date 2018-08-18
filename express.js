

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;
require('./routes/html_routes')(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tableArray = [];
var waitlistArray = [];

//api routes
app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    tableArray.push(newReservation);
});

app.get("/api/tables", function(req, res) {
    console.log(tableArray);
});

//start the app
app.listen(port, function() {
    console.log("App listening on port " + port);
});