    function valida (arr, num) {
        /*if(!arr && !num) throw new referenceError("Cadastre os Dados");
        if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");
        if(typeof arr !== 'number') throw new TypeError("O array precisa ser do tipo number");
        if(arr.length !== num) throw new rangeError("Tamanho Invalido");*/

        try{
            if(!arr && !num) throw new ReferenceError("Cadastre os Dados");
            if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");
            if(typeof arr !== 'number') throw new TypeError("O num precisa ser do tipo number");
            if(arr.length !== num) throw new RangeError("Tamanho Invalido");

            return arr;
        }

        catch(e) {
            if(e instanceof ReferenceError) {
                console.log("Este é um erro ReferenceError!")
                console.log(e. message)
            } else if(e instanceof TypeError) {
                console.log("Este é um erro TypeError!")
                console.log(e. message)
            } else if(e instanceof RangeError) {
                console.log("Este é um erro RangeError!")
                console.log(e. message)
            } else {
                console.log("Tipo de erro não previsto:" + e)
            }

        }

    }

console.log(valida([1], 1));


/*console.log(valida());
console.log(valida(5, 5));
console.log(valida([], 'a'));*/
