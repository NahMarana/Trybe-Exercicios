//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

function salarioFuncionario (salarioBruto) {
 let conta1;
 let salSemINSS;
 let salLiquido;
 let descIR;
 let descImposto;


    if (salarioBruto <= 1556.94) {
        conta1 = salarioBruto * 0.08;
        salSemINSS = salarioBruto - conta1;
    } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
        conta1 = salarioBruto * 0.09;
        salSemINSS = salarioBruto - conta1;
    } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
        conta1 = salarioBruto * 0.11;
        salSemINSS = salarioBruto - conta1;
    } else {
        salSemINSS = salarioBruto - 570.88;
    }

    if (salSemINSS <= 1903.98) {
        return "O salario líquido é " + salSemINSS.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + " , o mesmo é isento de imposto."
    } else if (salSemINSS >= 1903.99 && salSemINSS <= 2826.65) {
        descIR = salSemINSS * 0.075;
        descImposto = descIR - 142.80; 
        salLiquido = salSemINSS - descImposto;
    } else if (salSemINSS >= 2826.66 && salSemINSS <= 3751.05) {
        descIR = salSemINSS * 0.15;
        descImposto = descIR - 354.80;
        salLiquido = salSemINSS - descImposto;
    } else if (salSemINSS >= 3751.06 && salSemINSS <= 4664.68) {
        descIR = salSemINSS * 0.225;
        descImposto = descIR - 636.13;
        salLiquido = salSemINSS - descImposto;
    } else {
        descIR = salSemINSS * 0.275;
        descImposto = descIR - 869.36;
        salLiquido = salSemINSS - descImposto;
    }

    return "O salario líquido do funcionário é " + salLiquido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "."
}
console.log(salarioFuncionario(3800));