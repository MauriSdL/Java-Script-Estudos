// nao podemos criar constantes com palavras reservadas
// constantes presizan ter nomes significativos
// nao podem começar o nome de uma contantes com numeros
// nao podem conter espaços ou traços
// ultilizamos camelcase
// nao pode modificar o nome de uma variavel
// nao podemos modificar o valor de uma constante
// nao ultilize var ultilize const


// typeof(nome da variavel) serve para verificar o tipo de dado contido em uma variavel se é numerico string 
const primeiroNumero = 5;
const segundoNumero = 5;
const terceiroNumero = '5';

console.log(typeof(primeiroNumero));
console.log(typeof(terceiroNumero));
console.log(typeof(primeiroNumero + segundoNumero)); // type de resultado de um numero com um outro numero é resultado é numero 
console.log(typeof primeiroNumero + segundoNumero); // type de resultado de um numero com um outro numero sem o parenteses é resultado é o typo concatenado com o numero 
console.log(typeof(primeiroNumero + terceiroNumero)); // type de resultado de um numero com string resultado é string
console.log((primeiroNumero + terceiroNumero));  // concatenou
console.log((primeiroNumero + segundoNumero)); // apenas soma normalmente