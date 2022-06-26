


//gerar as op��es pro select
function geraOptions(vet, id) {

    let optionSelect = document.getElementById(id)
    for (let i = 0; i < vet.length; i++) {
        let option = document.createElement("option")
        option.value = vet[i]
        option.text = vet[i]
        optionSelect.appendChild(option)

    }

}

function listarArrays() {

    var idDinastia = "select-dinastia";
    var idNome = "select-nome";
    
    var dinastia = ['Codigo FIPE',
        'A',
        'B',
        'C',
        'D',
        'E',
        '038003-2'
    ]
    var nome = ['Modelo',
        'Carro 1',
        'Carro 2',
        'Carro 3',
        'Carro 4',
        'Carro 5',
        'Integra GS 1.8'
    ];
   
    geraOptions(dinastia, idDinastia);
    geraOptions(nome, idNome);
    
}


listarArrays()




