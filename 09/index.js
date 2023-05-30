// Crie sua função aqui
function filterLegalAge(objArr) {
  const ans = objArr.filter( object => {
    return object.age >= 18;
  })
  return ans;
}

// Não altere as linhas abaixo
console.log(filterLegalAge([
  {
    name: 'Maria',
    age: 1
  },
  {
    name: 'Gabriel',
    age: 10
  },
  {
    name: 'Matheus',
    age: 18
  },
  {
    name: 'Ana',
    age: 29
  },
]))