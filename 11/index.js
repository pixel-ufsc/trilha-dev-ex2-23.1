// Crie sua função aqui
function filterContainsA(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'a' || arr[i][j] === 'A') {
        newArr.push(arr[i]);
        break;
      }
    }
  }
  return newArr;
}

// Não altere as linhas abaixo
console.log(filterContainsA([
  'abacaxi',
  'nuvem',
  'Abismo',
  'KOMBI',
  'TERRA',
  'felicidade',
  'Urso',
  'queijo',
]))