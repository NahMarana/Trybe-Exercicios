//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpar = [];

for (let cont = 0; cont <= numbers.length - 1; cont++) {
    if (numbers[cont] % 2 === 1) {
        numImpar.push(numbers[cont]);
    }
}

if (numImpar.length > 0) {
    console.log(numImpar);
} else {
    console.log("Nenhum valor ímpar encontrado!");
}