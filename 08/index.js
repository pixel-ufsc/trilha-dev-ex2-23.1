// Crie sua função aqui
function uppercaseArray(list){
    let newList = [];
    for(let i = 0; i < list.length; i++){
        newList.push(list[i].toUpperCase());
    }
    return newList
}

// Não altere as linhas abaixo
console.log(uppercaseArray(['pixel', 'Trainee', 'trilha dev']))