const alunos = [
    {
        nome: 'Renata', 
        nota: 6,
        turma: '3A',
    },
    {
        nome: 'Barbara',
        nota: 9,
        turma: '2B',
    },
    {
        nome: 'Kleber',
        nota: 2,
        turma: '1B',
    },
    {
        nome: 'Vitor',
        nota: 7,
        turma: '1B',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    let reprovados =[];

    for( let i = 0; i < arr.length; i++ ) {

        const {nome, nota} = arr[i];
        if(nota >= media) {
            aprovados.push(nome);
        }
                
    }

    return aprovados;
    
}

console.log(alunosAprovados(alunos, 5));