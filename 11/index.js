// Crie sua função aqui
function filterContainsA(list){
  newList = []
  for (let i = 0; i < list.length; i++){
    if (list[i].includes('a') || list[i].includes('A')){
      newList.push(list[i])
    }
  }
  return newList
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