//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let aux = 0;

for (let cont = 0; cont <= numbers.length -1; cont++) {    
    if (aux < numbers[cont]) {
        aux = numbers[cont];
    }
}

console.log("O maior número do array é " + aux + ".");