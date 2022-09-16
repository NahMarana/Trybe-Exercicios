const fatorial = (n) => { 
let result = 1;

for (let cont = 1; cont <= n; cont += 1) {
    result *= cont;
}

return result;
};

console.log(fatorial(4));