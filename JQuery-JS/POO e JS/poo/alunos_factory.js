export const Alunos_Factory = (nome, matricula, nota1, nota2) => {
    const calcula_media = (nota1, nota2) => {
        let media = (nota1 + nota2) / 2;
        return media;
    }
    return {
        mostra_informacoes_aluno: () => {
            let media = calcula_media(nota1, nota2);
            console.log(`A média do aluno ${nome} é igual a ${media}`);
        }   
    }
}

export default Alunos_Factory;