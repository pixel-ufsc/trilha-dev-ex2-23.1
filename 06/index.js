// Crie sua função aqui
function factorial(num) {
    let sum = 1;
    for (i = num; i > 0; i--) {
        sum *= i;
    }
    return sum;
}

// Não altere as linhas abaixo
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(8))