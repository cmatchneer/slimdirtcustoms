var express = require("express");

var PORT = process.env.PORT || 3000;
var path = require("path");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static(__dirname + "/public/assets/css"));
app.use(express.static(__dirname + "/public/assets/js"));
app.use(express.static(__dirname + "/public/assets/images"));

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);






app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});