// Crie sua função aqui
function evenArray(num) {
    let arr = [];
    for (i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// Não altere as linhas abaixo
console.log(evenArray(10))
console.log(evenArray(5))
console.log(evenArray(1))
console.log(evenArray(-1))