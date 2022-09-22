const acordando = () => 'Acordando!!';
const cafeDaManha = () => 'Bora tomar café!!'
const dormir = () => 'Partiu dormir!!'

const doingThings = (callback) => {
    const resultado = callback();
    console.log(resultado);
};
doingThings(acordando);
doingThings(cafeDaManha);
doingThings(dormir);