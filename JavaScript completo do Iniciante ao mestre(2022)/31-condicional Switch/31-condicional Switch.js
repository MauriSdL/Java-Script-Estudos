/*
let diaSemana = 2
if (diaSemana === 0) {
    console.log("hoje é Domingo")
} else if (diaSemana === 1) {
    console.log("hoje é Segunda")
} else if (diaSemana === 2) {
    console.log("hoje é Terça")
} else if (diaSemana === 3) {
    console.log("hoje é Quarta")
} else if (diaSemana === 4) {
    console.log("hoje é Quinta")
} else if (diaSemana === 5) {
    console.log("hoje é Sexta")
} else {
    console.log("hoje é Sabado")
}
*/

// OBS:não pode esquecer de colocar o break
let diaSemana = 3 // se o numero conter aspas ele é uma string
let dia = ""
switch (diaSemana) {
    case 0:
        dia = "Domingo"
        break
    case 1:
        dia = "Segunda"
        break
    case 2:
        dia = "Terça"
        break
    case 3:
        dia = "Quarta"
        break
    case 4:
        dia = "Quinta"
        break
    case 5:
        dia = "Sexta"
        break
    case 6:
        dia = "Sabado "
        break
    default:
        dia = " -- "
}
console.log(`Hoje é ${dia}`)
