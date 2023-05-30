// Crie sua função aqui
function invertWord(word) {
    let newWord = '';
    for (i = word.length - 1; i >=0; i--) {
        newWord += word[i];
    }
    return newWord;
}

// Não altere as linhas abaixo
console.log(invertWord('javascript'))
console.log(invertWord('web'))
console.log(invertWord('pixel'))
console.log(invertWord('trainee'))