//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A  Porcentagem >= 80 -> B   Porcentagem >= 70 -> C   Porcentagem >= 60 -> D   Porcentagem >= 50 -> E   Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 80;
switch (true) {
    
  case (nota >= 90):
    console.log("Nota A");
    break;
  case (nota >= 80):
    console.log("Nota B");
    break;
  case (nota >= 70):
    console.log("Nota C");
    break;
  case (nota >= 60):
    console.log("Nota D");
    break;
  case (nota >= 50):
    console.log("Nota E");
    break;
  case (nota < 50):
    console.log("Nota F");
    break;
  case (nota < 100 && nota > 0):
    console.log("Error");
    break;
  default:
    console.log(nota);
    break;
}
