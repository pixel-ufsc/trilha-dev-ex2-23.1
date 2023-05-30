// Crie sua função aqui
function secondBiggestNumber(arr) {
    let second = arr.sort()[arr.length - 2];
    if (arr.length < 2) {
        return null;
    }
    return second;
}

// Não altere as linhas abaixo
console.log(secondBiggestNumber([0, 1, 2, 3, 4, 5]))
console.log(secondBiggestNumber([-1, 10, 20, 30, -10]))
console.log(secondBiggestNumber([100]))