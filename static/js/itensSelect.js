const { Console } = require('console');
const data = require('../../data/carros.json');

//gerar as op��es pro select
function geraOptions() {
    
    let optionSelect = document.getElementById("select-modelo")

    for (var item in data){
        let option = document.createElement("option")
        let modelo = data[item].modelo;

        console.log(modelo)
        
        option.value = modelo;
        
        option.text = modelo;
        optionSelect.appendChild(option)
    }

}

geraOptions()





