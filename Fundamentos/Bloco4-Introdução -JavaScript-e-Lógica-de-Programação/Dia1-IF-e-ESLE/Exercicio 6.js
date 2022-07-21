//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.


let peca = "RAINHA";

let pecaLowerCase = peca.toLowerCase();

switch (pecaLowerCase) {
  case "bispo":
    console.log("Diagonal");
    break;
  case "peão":
    console.log("Reto");
    break;
  case "torre":
    console.log("Horizontal e Vertical");
    break;
  case "cavalo":
    console.log("Movimento em L");
    break;
  case "rainha":
    console.log("Em todas as direções, quantas casas quiser");
    break;
  case "rei":
    console.log("Em todas as direções, uma casa por vez");
    break;
  default:
    console.log("Peça inexistente");
    break;
}
