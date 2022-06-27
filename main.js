const data = require('./data/data.js');
const Graph = require('./graph/graph.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/img'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");

});



const graph = new Graph();
Object.keys(data).forEach(function eachKey(key) {
    if (key === "Name") {
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
let getNameData = (data) => {
    let response = []
    data.forEach(element1 => {
        graph.jsonData.forEach(element2 => {
            if (element1 === element2.Name) {
                response.push(element2)
            }
        });
    });
    return response
};


app.set('view engine', 'pug')
app.post("/searcher", function (req, res) {

    let codigo = req.body.codigo;
    let modelo = req.body.modelo;

    if (modelo) {
        graph.searchGraphSelect(modelo, "dfs");
        var resposta = getNameData(graph.searchResult);
        var html = resultado(resposta);
        res.render('../views/index', {
            title: 'Searcher', message: html
        });
        //res.send(resposta);} 
    } 
    else if (codigo) {
        var index = data.Dynasty.indexOf(codigo, 0)
        var modeloCarro = data.Name[index]
        graph.searchGraphSelect(modeloCarro, "dfs");
        var resposta = getNameData(graph.searchResult);
        //console.log(resposta)
        var html = resultado(resposta);
        res.render('../views/index', {
            title: 'Searcher',
            message: html
        });
        // res.send(resposta);
    }
})
//
function resultado(resposta) {
    var html = " ";
    for (var i = 0; i < resposta.length; i++) {
        //console.log(resposta[i].Name + '\n');
        html += "Carrro encontrado no index: " + resposta[i].Index;
        html += " - Modelo: " + resposta[i].Name;
        html += " - Codigo FIPE: " + resposta[i].Codigo;
        html += " - Marca: " + resposta[i].Marca;
        html += " - Tipo: " + resposta[i].Tipo;
        html += " - Valor: $" + resposta[i].Valor;
    }

    return html;

}
app.listen(3008, () => console.log("http://localhost:3008/"));