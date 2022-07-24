//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let aux = Number.MAX_VALUE;

for (let cont = 0; cont <= numbers.length; cont++) {
    if (aux > numbers[cont]) {
        aux = numbers[cont];
    }
}

console.log("O menor número do meu array é " + aux + ".")