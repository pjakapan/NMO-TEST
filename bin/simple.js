var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/inventorydb";
var odataServer = require('./../index.js')('http://localhost:1337/odata');
var models = require('./../model/model.js');
var model = models.models;
MongoClient.connect(url, function (err, db) {
  odataServer
    .model(model)
    .onMongo(function (cb) { cb(err, db); });
});
app.use('/odata', odataServer.handle.bind(odataServer));
app.get('/', function (req, res) {
  res.send("Hello world!");
});
app.listen(1337);

