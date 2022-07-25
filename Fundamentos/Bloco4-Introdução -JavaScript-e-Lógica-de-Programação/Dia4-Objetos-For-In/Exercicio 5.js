// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

let recorrente;
if (info.recorrente === "Sim" && info2.recorrente === "Sim") {
    recorrente = 'Ambos recorrentes';
} else {
    recorrente = 'Não são recorrentes.';
}

let info3 = {
  personagem: `${info.personagem} e ${info2.personagem}`,
  origem: `${info.origem} e ${info2.origem}`,
  nota: `${info.nota} e ${info2.nota}`,
  recorrente: recorrente
};

for (const key in info3) {
  console.log(info3[key]);
}
