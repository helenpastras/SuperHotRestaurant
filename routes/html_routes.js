var path = require('path');

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../", "index.html"));
    });
    
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../", "tables.html"));
    });
    
    app.get("/Make", function(req, res) {
        res.sendFile(path.join(__dirname, "../", "Make.html"));
    });
}

