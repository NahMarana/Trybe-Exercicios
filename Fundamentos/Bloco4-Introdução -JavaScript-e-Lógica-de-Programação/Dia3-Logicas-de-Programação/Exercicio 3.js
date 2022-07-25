//Um que retorne a maior palavra deste array e outro que retorne a menor. 

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let cont = 0; cont < array.length; cont++) {    
    if (array[cont].length > maiorPalavra.length) {
    maiorPalavra = array[cont];  
    }
}

for (let cont2 = 0; cont2 < array.length; cont2++) {
    if (array[cont2].length < menorPalavra.length) {
    menorPalavra = array[cont2];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);
