// Crie sua função aqui
function oneToNumber(a){
    if (a > 0){
        let positiveValue = []
        for (let i = 1; i <= a; i++){
            positiveValue.push(i)
        }
        return positiveValue
    } else {
        let negativeValue = []
        for (let i = 1; i >= a; i--){
            negativeValue.push(i)
        }
        return negativeValue
    }
}

// Não altere as linhas abaixo
console.log(oneToNumber(10))
console.log(oneToNumber(5))
console.log(oneToNumber(1))
console.log(oneToNumber(-1))