// Crie sua função aqui
function factorial(num){
    if (num < 0){
        return -1;
    } else if (num == 0){
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

// Não altere as linhas abaixo
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(8))