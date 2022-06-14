function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;

}

const cliente1 = {
    nome: 'Ronaldo',
    idade: 72,
};

const cliente2 = {
    nome: 'Fatima',
    idade: 79,
};

const cliente3 = {
    nome: 'Wagner',
    idade: 56,
};

console.log(calculaIdade.call(cliente2, 10));
console.log(calculaIdade.apply(cliente3, [10]));
console.log(calculaIdade.call(cliente1, 5));