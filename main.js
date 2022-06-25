const data = require('./data/data.js');
const Graph = require('./graph_functions/graph.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));
app.use('/css', express.static(__dirname + 'static/css'))
app.use('/img', express.static(__dirname + 'static/img'))
app.use('/js', express.static(__dirname + 'static/img'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");

});

app.listen(8000, () => console.log("http://localhost:8000/"));