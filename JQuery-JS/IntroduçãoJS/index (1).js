/*===========================================================================
console.log("Hello World!");

const pi = 3.14; // Variaveis constantes

var variavelModificavel = "Mensagem";
variavelModificavel = 10.3;
variavelModificavel = 1; // A linguagem é fracamente tipavel

function showMensage()
{
  let variavelModificavel = "Teste de função."; //let é uma variavel que só existe neste escopo, ao fim da função ela some
  console.log(variavelModificavel);
}

showMensage();

var x=0;
var y=0;

while(y < 5){
  let x = 0;
  x = y + 1;
  console.log(x);
  y = y + 1;
}

console.log(x);

/* Variaveis são então declaradas como:
const
var
let
*/

/*===========================================================================*/

/*===========================================================================
//JS tem vetores também, são dinâmicos e não importa o que tem em posições não declaradas
var valores = [7.2, 8.9, 10, 23.5];
console.log(valores[0], valores[3]);
console.log(valores[4]);
valores[4] = 13.2;
console.log(valores[4]);
valores[12] = 11.5;

console.log("Teste:")
var i=0;
while(i<13){
  console.log(valores[i]);
  i++;
}
/*===========================================================================*/

/*===========================================================================
// Vetores funcionam como pilhas com função push e pop
valores = [1, 2, 3, 4]
console.log(valores);
valores.push(5);
console.log(valores);
valores.pop();
console.log(valores);

//Possuem também a função shift que remove no inicio ao contrário do pop
console.log(valores);
valores.shift();
console.log(valores);

//Existe a função splice que remove elementos e insere outros em posições específicas
// notação: 
//  array.splice( número da posicao,
//                número de elementos que deve remover naquela posição pra frente,
//                {elementos que serão inseridos no lugar, separados por vírgula});
valores.splice(1, 0, 5, 6, 7);
console.log(valores);
valores.splice(1, 2, 8, 9);
console.log(valores);

//Existe a função slice que cria fatias de arrays
// notação: 
//  array.slice( número da posicao inicial,
//               número da posição que ele não irá mais copiar);
const algunsValores = valores.slice(1,4);
console.log(valores);
console.log(algunsValores);


// Por não ser tipado pode adicionar json ou outros tipos nele
valores.push({id: 3}, false, null, "teste1", 'teste2');
console.log(typeof valores); //typeof mostra o tipo do dado

var i=12;
while(i<16){
  console.log(valores[i]);
  i++;
}
/*===========================================================================*/

/*===========================================================================
// Funções anônimas
const dobro = function(a){
  return a * 2;
}
console.log(dobro(3));

//Arrow Function
const triplo = (a) => {
  return a * 3;
}
console.log(triplo(3));
/*===========================================================================*/

/*===========================================================================
//Função map, mapeia todos os elementos de um vetor
const nums = [1, 2, 3, 4, 5];
let dobroNums = nums.map(function(e){
  return e * 2;
})
console.log(dobroNums);

const soma10 = (e) => e + 10;
resultado = nums.map(soma10);
console.log(resultado);

// FILTER
const produtos = [
  {nome: "Notebook", preco: 2499, fragil: true},
  {nome: "iPad Pro", preco: 4199, fragil: true},
  {nome: "Copo de vidro", preco: 1002.49, fragil: true},
  {nome: "Copo de plástico", preco: 18.99, fragil: false}
];

//Muito trabalho
function verifica_preco(p){
  tamanho = p.length;
  for(let i = 0; i<tamanho; i++){
    p[i].preco < 500 ? console.log("Barato") : console.log("Caro");
  }
}
verifica_preco(produtos);

//O método filter ajuda ao invés de fazer uma função como a anterior
const verifica_se_caro = (produto) => produto.preco > 500;
const produtos_caros = produtos.filter(verifica_se_caro);
console.log(produtos_caros);
/*===========================================================================*/

/*===========================================================================
//ForEach
fabricantes = ["Mercedes", "BMW", "Audi"];

const imprimir2 = (nome, indice) => console.log(`${indice + 1}. ${nome}`);
fabricantes.forEach(imprimir2);

fabricantes.forEach((nome, indice) => { console.log(`${indice + 1}. ${nome}`) });

//Mais exemplos de funções de callback
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
//sem callback
const notasBaixas1 = [];
for(let i in notas){
  if(notas[i]<7){
    notasBaixas1.push(notas[i]);
  }
}
console.log(notasBaixas1);
//com callback
const notasBaixas2 = notas.filter(function (notas){return notas < 7;});
console.log(notasBaixas2);

const notasMenorQue7 = (nota) => nota<7;
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);
/*===========================================================================*/

/*===========================================================================
//Strings
const universidade = "Universidade Federal de Uberlândia";
//charAt(posição)
console.log(universidade.charAt(4));
console.log(universidade.charAt(5));
//charCodeAt(posiçao)
console.log(universidade.charCodeAt(3));
//substring(inicio, fim)
console.log(universidade.substring(0, 10));
//concat(string)
console.log("Universidade: ".concat(universidade).concat("!"));
//replace(caractere pra ser substituido, caractere que substituirá)
console.log(universidade.replace('a', 'u'));
//split
console.log("Ana,Maria,Pedro".split(","));
print = (m) => console.log(m);
print("Hello, World!");
/*===========================================================================*/
import fetch from "node-fetch";

async function showChuckNorisPhrase() {
  let apiResponse = await fetch("https://api.chucknorris.io/jokes/random");
  let phraseResponse = await apiResponse.json();
  // a variavel phraseResponse tem um atributo value que tem a frase de retorno
  let mensagem = phraseResponse.value;
  return(mensagem);
}
console.log(await showChuckNorisPhrase());