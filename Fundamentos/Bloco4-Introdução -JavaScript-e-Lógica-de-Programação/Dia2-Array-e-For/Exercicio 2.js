//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let cont = 0; cont <= numbers.length -1; cont++) {
    soma += numbers[cont];
}
console.log("A soma total do array é " + soma);