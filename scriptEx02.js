let studNotes = [
{
    name: "Flavia",
    n1: 8,
    n2: 5,
},
{
    name: "João",
    n1: 7,
    n2: 9,
}, 
{
    name: "José",
    n1: 4,
    n2: 6,
}
]

let average

function notes (n1, n2) {
    average = (n1 + n2)/2
    console.log(average)
    return average
}

for (studNotes of studNotes) {
    notes(Number(studNotes.n1), Number(studNotes.n2))
    if (average >= 7) {
      alert(`A média do aluno ${studNotes.name} é ${average}! \n Parabéns ${studNotes.name}! Você foi aprovado no concurso!`)
  } else {
      alert(`A média do aluno ${studNotes.name} é ${average}! \n Não foi dessa vez! ${studNotes.name}, tente novamente!`)
  }
}