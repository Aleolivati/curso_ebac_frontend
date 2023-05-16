const alunos = ['Gustavo', 'Amanda', 'Luiz', 'Cassandra', 'Margarida', 'José', 'Miguel'] ;

const notas = [9,3,5,8,6,1,10] ;


const boletim = alunos.map((nomeAluno, indice) => ({
        nome: nomeAluno,
        nota: notas[indice]
})) ;

boletim.push(
    {
        nome: 'Maria',
        nota: 5
    }, 
    {
        nome: 'Pedro',
        nota: 8
    }
)


const aprovados = boletim.filter(boletimAluno => {return boletimAluno.nota >= 6 }) ;

console.log(aprovados)