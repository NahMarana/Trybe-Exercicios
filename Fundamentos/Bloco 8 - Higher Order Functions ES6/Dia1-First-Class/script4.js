const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const comparaArrays = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    console.log(rightAnswers + ' = ' + studentAnswers + ' :' + '1');
    return 1;
  } else if (studentAnswers === "N.A") {
    console.log(rightAnswers + ' = ' + studentAnswers + ' :' + '0');
    return 0;
  } else {
    console.log(rightAnswers + ' = ' + studentAnswers + ' :' + '-0.5');
    return -0.5;
  }
};

const contadorDePontos = (rightAnswers, studentAnswers, func) => {
  let pontos = 0;
  
  for (let index = 0; index < rightAnswers.length; index += 1) {
    pontos += func(rightAnswers[index], studentAnswers[index]);
  }
  return pontos;
};

let resultado = contadorDePontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaArrays);
console.log(resultado);