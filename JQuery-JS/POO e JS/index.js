import { testandoImport, soma } from './funcoes/minhas_funcoes.js'
import { Alunos } from './poo/alunos.js'
import { Alunos_F } from './poo/alunos_as_func.js';
import { Alunos_Factory } from './poo/alunos_factory.js'

/*
-- chamada externa da funcoes
console.log('Está funcionando!!!')
testandoImport();
let a = 10;
let b = 100;
let c = 0;

c = soma(a, b);
console.log(c);
*/

/*
-- programação orientada a objetos
*/
const alunos1 = new Alunos('Marcio', '1234abcd', 8.0, 9.0);
alunos1.calcula_media();
alunos1.mostra_informacoes_aluno();
console.log(typeof alunos1);
console.log(typeof Alunos);

const alunos2 = new Alunos_F('Marcio', '1234abcd', 8.0, 9.0);
alunos2.calcula_media();
alunos2.mostra_informacoes_aluno();
console.log(typeof Alunos_F);


const alunos3 = Alunos_Factory('Marcio', '1234abcd', 8.0, 9.0);
alunos3.mostra_informacoes_aluno();
console.log('Objeto instanciado!!');
console.log(typeof Alunos_Factory);