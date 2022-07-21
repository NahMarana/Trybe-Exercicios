//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Um ângulo será considerado inválido se não tiver um valor positivo.

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
const ang1 = 60;
const ang2 = 60;
const ang3 = 60;
const somaAngulos = ang1 + ang2 + ang3;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log("Angulo inválido");
} else if (somaAngulos === 180) {
    console.log(true);
} else {
    console.log(false)
}