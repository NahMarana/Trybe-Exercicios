//Algoritmo que retorne o fatorial de 10


function Valor (N){
    var somaFat = 1;

    for (var cont = N; cont >= 1; cont--) {
        somaFat = somaFat * cont;
    }

    console.log(" O valor do fatorial informado é " + somaFat + ".");



}
Valor(10);