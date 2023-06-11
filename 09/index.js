// Crie sua função aqui
function filterLegalAge(ages){
  const higher = ages.filter(function(person){
    return person.age >= 18
  });
  return higher;
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