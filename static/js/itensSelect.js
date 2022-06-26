//gerar as op��es pro select
function geraOptions(item, id) {
   
    let optionSelect = document.getElementById(id)
    for (let i = 0; i < item.length; i++) {
        let option = document.createElement("option")
        option.value = item[i]
        console.log(item[i])
        option.text = item[i]
        optionSelect.appendChild(option)
    }

}

function listarArrays() {

    var idCodigo = "select-codigo";
    var idModelo = "select-modelo";
   
    var modelo = [
        'Carro 1',
        'Carro 2',
        'Carro 3',
    ]

    var codigo = [
        '1',
        '2',
        '3'
    ]
   
    geraOptions(modelo, idModelo);
    geraOptions(codigo, idCodigo);
    
}

listarArrays()