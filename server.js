var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var connection = require("./config/connection.js");

var port = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
connecion.connect(function (err) {
    if (err) throw err;
    app.listen(port);

})