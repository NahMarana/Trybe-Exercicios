const contratacao = (nomeCompleto) => {
    const nomeModificado = nomeCompleto.replaceAll(' ', '_').toLowerCase();
    return {
        nome: nomeCompleto,
        email: `${nomeModificado}@trybe.com`, 
    };
};
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drummond'),
      id3: callback('Carla Paiva'),
    }
    return employees;
  };
  
  console.log(newEmployees(contratacao));
