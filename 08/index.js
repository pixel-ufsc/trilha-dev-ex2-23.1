// Crie sua função aqui
function uppercaseArray(arr) {
    const newArr = arr.map(str => {
        return str.toUpperCase();
    })
    return newArr;
}

// Não altere as linhas abaixo
console.log(uppercaseArray(['pixel', 'Trainee', 'trilha dev']))