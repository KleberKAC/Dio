function filtraPar(arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const lista = [1,11,24,48,36,70,90,101];

console.log(filtraPar(lista));