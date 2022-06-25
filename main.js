const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const Graph = require('./graph_functions/graph');
const graph = new Graph();

app.use(express.static('static'));
app.use("/static", express.static(__dirname + "static/index.js"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");

});

app.listen(8000, () => console.log("http://localhost:8000/"));