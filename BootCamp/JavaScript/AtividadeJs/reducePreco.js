const lista = [
    {
        produto: 'Sabão em Pó',
        preco: 30

    },

    {
        produto: 'Amaciante',
        preco: 20

    },

    {
        produto: 'Detergente',
        preco: 1.99

    },

    {
        produto: 'Pão de Forma',
        preco: 8.99

    },
]

const saldoDisponivel = 100;

function calcSaldo (saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index){
       /* console.log('rodada', index +1);
        console.log({prev});
        console.log({current});*/
        return prev - current.preco; 
    }, saldoDisponivel);
}


console.log(calcSaldo(saldoDisponivel, lista));