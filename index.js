const express = require("express");
const  mongoose = require("mongoose");
const request = require('request');
const path = require("path");
//angular.module('myApp', [require('angular-route')]);
const bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost/dbMehmet");
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", require("./routes/viewRoutes"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/api", require("./routes/api"));

console.log("nodejs calıştı...");
app.listen(3333);