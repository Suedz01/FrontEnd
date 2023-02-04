import fetch from 'node-fetch';

/*
function showMessage(mensagem)
{
    //let mensagem = 'Teste funcao';
    console.log(mensagem);
}
let mensagem = 'JS é vida!!';
showMessage(mensagem);

console.log(mensagem);
mensagem = 'Só que não';
console.log(mensagem);
mensagem = 10.5;
console.log(mensagem);
*/

/* Variaveis 
var x = 0;
var times = 4;
var x_ant = 0;

while (x < 3) {
    //let x = 0;
    let x = x_ant + 1;
    //x = x_ant + 1;
    console.log(x);
    x_ant = x;
  }
  console.log(x);
  */
 /*
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);
valores[4] = 4;
console.log(valores[4]);
valores[14] = 4;
console.log(valores[4]);

valores.push(44);
console.log(valores[4]);
valores.pop()
valores.push({ id: 3 }, false, null, "teste");
console.log(valores[4]);
console.log(typeof valores);
*/
/*/ introdução funcao
function teste()
{
    console.log('Teste de funcao');
}
teste();

const dobro = function(a) {
    return a*2;
}
console.log(dobro(4));

const triplo = (a) => {
    return a * 3;
}
console.log(triplo(4));

ola = () => 'ola';
console.log(ola());
*/
// const nums = [1, 2, 3, 4, 5];

// let resultado = nums.map(function (e) {
//     return e * 2;
//   });
// console.log(resultado)

// const soma10 = (e) => e + 10;
// resultado = nums.map(soma10);
// console.log(resultado);

// outrtos comandos de array
/*
const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
console.log(pilotos);
pilotos.pop(); // renive o ultimo elemento
console.log(pilotos);
pilotos.push("Verstappen"); // adiciona um elemento na ultinma posicao
console.log(pilotos);
pilotos.shift() // renive o primeiro elemento
console.log(pilotos);
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);
pilotos.splice(3,2, 'Rubinho');
console.log(pilotos);

algunsPilotos = pilotos.slice(0,2);
console.log(algunsPilotos);
*/

/* Filter
function verifica_preco(p){
    tamanho = p.length
    for(let i=0;i < tamanho;i++)
    {
        if(p[i].preco > 500)
        {
            console.log('Caro');
        } 
        else{
            console.log('Barato')
        }
        console.log(p[i].nome);
    }
}

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 1002.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false },
  ];

//verifica_preco(produtos);

const verifica_se_caro = (produto) => produto.preco > 500;

barato = produtos.filter(verifica_se_caro);
console.log(barato)
*/
/* callback 01
function imprimir(f){
    tamanho = f.length
    for(let i=0;i < tamanho;i++)
    {
        console.log(f[i] + '\n');        
    }
}
function imprimir2(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
  }

const fabricantes = ["Mercedes", "Audi", "BMW"];
imprimir(fabricantes);
fabricantes.forEach(imprimir2)
*/
/*
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
// Sem callback
const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}
console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});
console.log(notasBaixas2);

const notasMenorQue7 = (nota) => nota < 7;
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);

*/

/*
// Strings
const universidade = "Universidade Federal de Uberlândia";
console.log(universidade.charAt(4));
console.log(universidade.charAt(5));
console.log(universidade.charCodeAt(3));

console.log(universidade.substring(0, 13));
console.log("Universidade: ".concat(universidade).concat("!"));

console.log(universidade.replace('U', 'u'));
texto = "Ana,Maria,Pedro";
console.log("Ana,Maria,Pedro".split(','));
a = ("Ana,Maria,Pedro".split(','))
console.log(a);
*/

/*
async function showChuckNorisPhrase() {
    // read
    let apiResponse = await fetch("https://api.chucknorris.io/jokes/random");
    let phraseResponse = await apiResponse.json();
    let mensagem = phraseResponse.value;
    console.log(mensagem);
    return(mensagem)
  }
  
let mensagem = showChuckNorisPhrase().catch(console.log);
*/

async function showChuckNorisPhrase() {
  let apiResponse = await fetch("https://api.chucknorris.io/jokes/random");
  let phraseResponse = await apiResponse.json();
  // a variavel phraseResponse tem um atributo value que tem a frase de retorno
  let mensagem = phraseResponse.value;
  return(mensagem);
}
console.log(await showChuckNorisPhrase());
