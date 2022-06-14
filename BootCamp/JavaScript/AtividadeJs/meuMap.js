const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapThis(arr, thisArg) {
    
    
    return arr.map(function(item){
       return item * this.value;
    }, thisArg);


}

const num = [1, 2, 3];

console.log('this -> maçã', mapThis(num, maca));
console.log('this -> laranja', mapThis(num, laranja));
//console.log('this -> Pera', mapThis(num, pera));