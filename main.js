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

const graph = new Graph();
Object.keys(data).forEach(function eachKey(key) {
    if (key === "Modelo") {
        graph.addNode(data[key])
    } else {
        graph.addNode(data[key])
        graph.generateGraph(data[key], key)
    }
});
let twoElementSearch = (nodeValues, searchType) => {
    graph.searchGraphSelect(nodeValues[0], searchType);
    firstValueResult = graph.searchResult;
    graph.searchGraphSelect(nodeValues[1], searchType);
    secondValueResult = graph.searchResult;
    return firstValueResult.filter(element => secondValueResult.includes(element));
};
let getModeloData = (data) => {
    let response = []
    console.log("-------data:" + data + "-----")
    data.forEach(element1 => {
        graph.jsonData.forEach(element2 => {
            if (element1 === element2.modelo) {
                response.push(element2)
            }
        });
    });
    
    return response
};

app.set('view engine', 'pug')
app.post("/linhagem", function (req, res) {
    let modelo = req.body.modelo;
    let codigo = req.body.codigo;

    if ((modelo != null && modelo != 'Modelo do Carro')) {
    
        graph.searchGraphSelect(modelo, "dfs");
        var resposta = getModeloData(graph.searchResult);

        var html = contarHitoria(resposta);
        res.render('../views/index', {
            title: 'Linhagens', message: html
        }); 
    } 
    
})
//
function contarHitoria(resposta2) {
    var html = " ";
    for (var i = 0; i < resposta2.length; i++) {
        html += "Modelo do carro: " + resposta2[i].modelo;
        html += ' '
        html += "Marca:" + resposta2[i].marca;
        html += ' '
        html += "Codigo FIPE: " + resposta2[i].codigo;
    }

    return html;

}
app.listen(3001, () => console.log("servidor rodando"));

app.listen(8000, () => console.log("http://localhost:8000/"));