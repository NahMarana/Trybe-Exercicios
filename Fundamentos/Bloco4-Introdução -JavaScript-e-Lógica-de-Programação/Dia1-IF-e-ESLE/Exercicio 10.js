//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.

const custoProduto = 90;
const valorVenda = 120;
let valorCustoTotal = custoProduto * 1.20;
let lucroPorVenda = valorVenda - valorCustoTotal;
let lucroVendas = (1000 * valorVenda) - (1000 * valorCustoTotal);

console.log(lucroVendas);