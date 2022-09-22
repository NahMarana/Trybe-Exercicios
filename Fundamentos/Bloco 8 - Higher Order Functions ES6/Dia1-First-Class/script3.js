const numerosAleatorios = () => Math.ceil(Math.random() * 5);

const meusNumeros = (number, callback) => {
  const numberAleatorio = callback();
  const myNumber = number;

  if (myNumber === numberAleatorio) {
    return `Ǹúmero sorteado: ${numberAleatorio}
Meu Número: ${myNumber}.
Parabéns você ganhou!`;
  }
  return `Ǹúmero sorteado: ${numberAleatorio}
Meu Número: ${myNumber}.
Tente novamente!`;
};

console.log(meusNumeros(4, numerosAleatorios));
