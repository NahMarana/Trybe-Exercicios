function admTempoTrybe() {
  const admtempo = document.querySelector("#header-container");
  admtempo.style.backgroundColor = "green";
}

function footer() {
  const rodapeTrybe = document.querySelector("#footer-container");
  rodapeTrybe.style.backgroundColor = "black";
}

function urgenteImportante() {
  const alteraCorUrgenteImportante = document.querySelectorAll("h3")[0];
  alteraCorUrgenteImportante.style.backgroundColor = "purple";
}

function fundoImportante() {
  const corFundoImportante = document.querySelector(".emergency-tasks");
  corFundoImportante.style.backgroundColor = "pink";
}

function urgenteNaoImportante() {
  const alteraCorUrgenteNaoImportante = document.querySelectorAll("h3")[1];
  alteraCorUrgenteNaoImportante.style.backgroundColor = "purple";
}

function fundoEmergency() {
  const corFundoEmergency = document.querySelector(".no-emergency-tasks");
  corFundoEmergency.style.backgroundColor = "yellow";
}

function emergencyImportante() {
  const naoUrgenteImportante = document.querySelectorAll("h3")[2];
  naoUrgenteImportante.style.backgroundColor = "black";
}

function emergencyNaoImportante() {
  const naoUrgenteNaoImportante = document.querySelectorAll("h3")[3];
  naoUrgenteNaoImportante.style.backgroundColor = "black";
}

function chamaFuncao() {
  admTempoTrybe();
  footer();
  urgenteImportante();
  fundoImportante();
  urgenteNaoImportante();
  fundoEmergency();
  emergencyImportante();
  emergencyNaoImportante();
}

chamaFuncao();