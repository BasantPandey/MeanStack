/**
 * Created by DELL on 4/22/2016.
 */
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/Client/images/favicon.ico'));
app.use(express.static(__dirname + '/public/Client/'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyparser.json());
var routes = require('./public/Server/route')(app);
var Port = process.env.PORT || 3000;
app.listen(Port);
console.log("server running on port " + Port);