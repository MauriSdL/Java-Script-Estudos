// let sao as variaveis
// var tambem é uma variavel porem é antiga nao se usa mais é usado em escopo e funções
// variaveis sao Case-sensitive que significa que o interpretador vai saver diferenciar
// (continuaçao da linha de cima) nomes iniciados com letras maiusculas ou minusculas
let nome = 'Joao';
let nome;  // É uma variavel sem valor se executar ela no console aparecerá undefined
nome = 'qualquer valor';  // Inicializando a variavel
var amante = 'Pedro';
const nome = 'joao';  // Essa é uma variavel imultavel vc nao pode alterar o valor atribuido a ela
let nomeDoAluno = null; // Nulo nao aponta para nunhum local na memoria 

console.log(nome, 'nasceu em 1984')
console.log('Em 2000', nome, 'conheceu maria.')
console.log(nome, 'casou-se com maria em 2012')
console.log('Maria teve um filho com', nome, 'em 2015')
console.log('O filho de ', nome, 'se chama Eduardo')
