// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//HTML routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});