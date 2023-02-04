function inicia() {
    let espaco_cabecalho = document.getElementById('espaco_cabecalho');
    const cab_1 = document.createElement('h1');
    cab_1.innerText = 'Palmeiras campeão!!';
    espaco_cabecalho.appendChild(cab_1);            
    console.log('Maravilha!!');
    let data = new Date();
    alert('Hoje é dia ' + data);
    const paragrafo = document.createElement('p');
    paragrafo.innerText = 'Elemento foi criado com sucesso';
    document.body.appendChild(paragrafo);
}

const funcao_carrega_tabela = () => {
    let espaco_tabela = document.getElementById('espaco_tabela');
    let tabela = document.createElement('table');
    tabela.border = '1';
    let tabela_body = document.createElement('tbody');
    tabela.appendChild(tabela_body);

    for(let i=0; i < 3; i++) {
        let tr = document.createElement('tr');
        tabela_body.appendChild(tr);
        for(let j=0; j < 3; j++) {
            let td = document.createElement('td');
td.appendChild(document.createTextNode("Cell " + i + "," + j));
tr.appendChild(td); 
        }
    }
    espaco_tabela.appendChild(tabela);
}
