var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tableArray = [];




//api routes
app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    tableArray.push(newReservation);
});

//start the app
app.listen(port, function() {
    console.log("App listening on port " + port);
});