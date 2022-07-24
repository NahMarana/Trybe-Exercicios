//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media = 0;
let soma = 0;

for (let cont = 0; cont <= numbers.length -1; cont++) {
    soma += numbers[cont];
    media = soma / numbers.length;
}

if (media <= 20) {
    console.log("Valor menor ou igual a 20.");
} else {
    console.log("Valor maior que 20.");
}
