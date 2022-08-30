function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function diasDaSemana() {
  const dayWeek = document.querySelector("#days");

  for (let cont = 0; cont < decemberDaysList.length; cont += 1) {
    let day = decemberDaysList[cont];
    const li = document.createElement("li");
    li.innerText = day;
    li.className = "day";

    if (day === 24 || day === 31) {
      li.classList.add("holiday");
    } else if (day === 4 || day === 11 || day === 18) {
      li.classList.add("friday");
    } else if (day === 25) {
      li.classList.add("friday", "holiday");
    }
    dayWeek.appendChild(li);
  }
}

diasDaSemana();

function criaBotao(feriado) {
  const botao = document.querySelector(".buttons-container");
  let novoBotao = document.createElement("button");
  let newButtonid = "bth-holiday";

  novoBotao.innerText = feriado;
  newButtonid.id = newButtonid;

  botao.appendChild(novoBotao);
}

criaBotao("Feriado");

function alteraCor() {
  const mudaCor = document.querySelector(".holiday");
  mudaCor.style.backgroundColor = "rbg(238,238,238)";

  const button = document.getElementById('bth-holiday');
  button.addEventListener('click', function(){ 
      for(let index = 0; index < mudaCor.length; index += 1) {
       mudaCor[index];  
      }
  });
}
alteraCor();
// Escreva seu código abaixo.
