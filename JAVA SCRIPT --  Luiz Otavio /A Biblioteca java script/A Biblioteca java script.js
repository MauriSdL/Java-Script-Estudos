
//--> Mostrando o tipo de dado da varialvel
// se é int, string, float
//const num = typeof'5';  // '5 é uma string
//console.log(num)  // resultado -> string

//--> Convert string para int
// let num1 = prompt('Digite um numero: ');
// let num2 = prompt('Digite outro numero: ');
// num1 = Number(num1); // Number convert string para numero
// num2 = Number(num2); // N maiusculo de Number
// console.log(num1 + num2);

//--> Convertendo string para int
//const num2 = parseInt('5');
//console.log(num2)  // resultado -> 5 type int

//--> Convertendo string para float
//const num2 = parseFloat('5');
//console.log(num2)  // resultado -> 5 type float

//--> Abrir o console abre o navegador botao direito inspecionar

//--> alert('menssagem'); --> Faz aparecer uma mensagem no
// navegador quando abre aparece no canto superior lado direito

//--> imprimir texto aparecendo as aspas
//let umastring = 'Um \"texto\"';
//console.log(umastring);

//--> concatenar string
//let umastring = "Um texto";
// concat --> serve para concatenar string igual o sinal de +
//console.log(umastring.concat('em um lindo dia.'));
//console.log(umastring + 'em um lindo dia');
//console.log(`${umastring} em um lindo dia.`)

//--> descobrir o indice de uma palavra
// let umastring = "Um texto";
// console.log(umastring.indexof('texto'));

//--> descobrir o indice de uma palavra de traz para frente
let umastring = "Um texto";
console.log(umastring.lastIndexOf('o'));
console.log(umastring.lastIndexOf('m', 3)); // 3 refere ao
// - ultima letra que sera a primeira a ser contada de tras
// - ate o inicio
