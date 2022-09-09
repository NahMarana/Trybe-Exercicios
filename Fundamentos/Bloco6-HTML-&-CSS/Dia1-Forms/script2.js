window.onload = function () {
  const button = document.getElementById("enviar");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    alerta();
  });
};

function submet() {
  const btn = document.getElementById("enviar");
  const aut = document.getElementById("aut");
  aut.addEventListener("change", () => {
    btn.disabled = !aut.checked;
  });
}

submet();

function limiteCaracter(min, max, value) {
  if (value < min || value > max) {
    return false;
  } else {
    return true;
  }
}

function validacao(boleano) {
  if (boleano === false) {
    alert("Dados Inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}

function alerta() {
  const camposIds = ["name", "email", "text"];

  for (let index = 0; index < camposIds.length; index++) {
    const element = document.getElementById(camposIds[index]);
    const limitCarac = limiteCaracter(element.minLength,element.maxLength,element.value);
    validacao(limitCarac);
  }
}
