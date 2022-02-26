// Regra geral
// Se a primeira expressao for false o javaScript executa o segundo comando
// (|| ou) Caso a primeira expressao seja verdadeira o javaScript nao prescisa executar a segunda expressao

/*
let n = 0
n = n || 10
console.log(n)

let n1 = 1
n = n1 || 10
console.log(n1)
*/

/*
let isvalid = true
if (isvalid) {
    console.log("É valido")
}
isvalid && console.log("é valido")
*/


let isvalid = false
if (isvalid) {
    console.log("É valido")
}
isvalid && console.log("é valido")
isvalid || console.log("é valido")