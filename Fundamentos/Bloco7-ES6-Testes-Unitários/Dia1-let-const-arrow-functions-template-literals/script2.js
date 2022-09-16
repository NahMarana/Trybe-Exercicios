const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  for (let index = 1; index < array.length; index += 1) {
    for (let cont = 0; cont < index; cont += 1) {
      if (array[index] < array[cont]) {
        let posicao = array[index];
        array[index] = array[cont];
        array[cont] = posicao;
      }
    }
  }
  return array;
};
console.log(sortOddsAndEvens(oddsAndEvens));
