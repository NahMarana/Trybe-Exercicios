const longestWord = (frase) => {
    const palavraMaior = frase.split(' ');
    let palavra = 0;
    let resultado = '';

    for (const plvMaior of palavraMaior) {
        if(plvMaior.length > palavra) {
            palavra = plvMaior.length;
            resultado = plvMaior;
        }
    }
    return resultado;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))