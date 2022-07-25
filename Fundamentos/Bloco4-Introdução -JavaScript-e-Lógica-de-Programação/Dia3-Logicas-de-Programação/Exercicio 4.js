//Escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let primo = true;
let maiorNumeroPrimo = 0;

for (let cont = 2; cont <= 50; cont++) {

    for (let aux = 2; aux < cont; aux ++) {       
        if (cont % aux === 0) {
            primo = false;
            break;
        }    
    }

    if (primo && maiorNumeroPrimo < cont) {
        maiorNumeroPrimo = cont;
    }
    primo = true;
}
console.log(maiorNumeroPrimo);