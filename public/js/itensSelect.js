


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
    
    var nome = [
        'Legend 3.2/3.5',
        'NSX 3.0',
        'MARRU\u00c1 2.8 12V 132cv TDI Diesel',
        'MARRU\u00c1 AM 100 2.8  CS TDI Diesel',
        '145 Elegant 1.7/1.8 16V',
        'Integra GS 1.8',
        '145 QV',
        '155 Super',
        '156 Sport Wagon 2.5 V6 24V 4p Aut.',
        '164 Super V6 24V',
        'Spider 2.0/3.0',
        'Swift Hatch/ Sedan 1.3',
        'Hummer Hard-Top 6.5 4x4 Diesel TB',
        'Hi-Topic SLX/SDX/DLX Full Diesel',
        'Jipe Rocsta GT 4x4 2.2 Diesel',
        'Towner Coach Full',
        'DB9 Coupe 6.0 V12 510cv',
        'Rapide 6.0 V12 477cv',
        'Vanquish V12 6.0 565cv',
        'Vantage Coupe 4.7 V8 425cv'
    ];
   
    var dinastia = [
        '038002-4',
        '038001-6',
        '060001-6',
        '060003-2',
        '006009-7',
        '038003-2',
        '006008-9',
        '006004-6',
        '006014-3',
        '006006-2',
        '006007-0',
        '028021-6',
        '037001-0',
        '007001-7',
        '007020-3',
        '007003-3',
        '085011-0',
        '085007-1',
        '085010-1',
        '085002-0'
    ];
    
    geraOptions(dinastia, idDinastia);
    geraOptions(nome, idNome);
    
}


listarArrays()




