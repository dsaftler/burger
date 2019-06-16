var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extend: true}));
app.use(express.json());

var hBars = require("express-handlebars");

app.engine("handlebars", hBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on: http://localhost: "+PORT);  
});
