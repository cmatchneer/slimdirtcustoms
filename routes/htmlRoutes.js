var path = require("path");
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/background", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/background.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/contact.html"));
    });

};