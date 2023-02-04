export function Alunos_F(nome, matricula, nota1, nota2) {
    this.nome = nome;
    this.matricula = matricula;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.media = 0;

    this.calcula_media = () => {
        this.media = (this.nota1 + this.nota2) / 2;
    }

    this.mostra_informacoes_aluno = () => {
        console.log(`A média do aluno ${this.nome} é igual a ${this.media}`);
    }
}

export default Alunos_F;