const substituaX = (nome) => {
    const frase = 'Tryber x aqui';
    
    return frase.replaceAll('x', nome);
}

const minhasSkills = (habilidades) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `${habilidades}. Minhas três principais habilidades são: ${skills}`;
    return resultado;
}
const func1 = substituaX('Nathalia');
const func2 = minhasSkills(func1);

console.log(func2);