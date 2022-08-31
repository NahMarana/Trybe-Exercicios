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
  novoBotao.id = "btn-holiday";
  novoBotao.innerText = feriado;

  botao.appendChild(novoBotao);
}

criaBotao("Feriado");

function alteraCor() {
  const mudaCor = document.querySelectorAll(".holiday");
  const button = document.getElementById("btn-holiday");
  button.addEventListener("click", function () {
    for (let index = 0; index < mudaCor.length; index += 1) {
      let isColored = mudaCor[index].style.backgroundColor;
      if (isColored === "lightgreen") {
        mudaCor[index].style.backgroundColor = "rgb(238,238,238)";
      } else {
        mudaCor[index].style.backgroundColor = "lightgreen";
      }
    }
  });
}
alteraCor();

function newButton(sexta) {
  const filhaButton = document.querySelector(".buttons-container");
  let buttonFriday = document.createElement("button");
  buttonFriday.id = "btn-friday";
  buttonFriday.innerText = sexta;

  filhaButton.appendChild(buttonFriday);
}
newButton("Sexta-Feira");

function alteraTexto(mudaTextoArray) {
  const mudaTexto = document.querySelectorAll(".friday");
  const botaoSexta = document.getElementById("btn-friday");
  botaoSexta.addEventListener("click", function () {
    for (let index = 0; index < mudaTexto.length; index += 1) {
      let isText = mudaTexto[index].innerText;
      if (isText === "Sextou") {
        mudaTexto[index].innerText = mudaTextoArray[index];
      } else {
        mudaTexto[index].innerText = "Sextou";
      }
    }
  });
}
let voltaSexta = [4, 11, 18, 25];
alteraTexto(voltaSexta);

function zoomDays() {
    let zoom = document.querySelector('#days');
    zoom.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    });

    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    });
  }
  zoomDays();

  function personalizarTarefa(tarefa) {
    const tarefas = document.querySelector('.my-tasks');
    let minhasTarefas = document.createElement('span');

    minhasTarefas.innerText = tarefa;

    tarefas.appendChild(minhasTarefas);
  }
  personalizarTarefa('Curso-Trybe');

  
// Escreva seu código abaixo.
