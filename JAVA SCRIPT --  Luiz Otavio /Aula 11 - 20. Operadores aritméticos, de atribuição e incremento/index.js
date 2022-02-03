// OBS: se apararecer no resultado NaN - Not a Number
// siginifica que sua conta esta com um resultado errado

//convertendo dados
const num = '5';  // isso é uma string

// Convertendo string para int
// typeof serve para verificar que tipo de dado é
// se é int float string
const num = parseInt('5');

/*
Operadores aritimeticos em ordem de precedencia
1 - () 
2 - / divisao e * multiplicaçao
3 - ** potenciaçao
4 - * multiplicaçao e / divisao e % resto da divisao
+ (Adição e concatenaçao) e - subitraçao
++ operador de incremento --> ele pega o valor da variavel
   e soma acrecentando mais 1

   operadores de atribuiçao
   -=
   +=
   *=
   **=
   /=
*/

//const num1 = 2;
//const num2 = 5;
//const num3 = 10;

//console.log(num1 + num2);

// resultado 510 porque as variaveis estao unidas e
// nao somadas

// let contador = 5;
//contador++;
//contador++;
//contador++;
//console.log(contador);
// OBS: Primeiro executa o comando e depois ele retorna
// o valor com o incremento do valor pra gente

// com o operador de incremento antes da variavel
// o resultado é o mesmo
//let contador = 5;
//++contador;
//++contador;
//++contador;
//console.log(contador);
// OBS: Primeiro faz a conta depois ele retorna o valor pra gente

// pos ++
//let contador = 1;
//console.log(contador++);
//console.log(contador);
// resultado 1 e 2

// ++pre
//let contador = 1;
//console.log(++contador);
//console.log(contador);
// resultado 2 e 2

// operador de decremento --
// let contadora = 15;
// console.log(contadora--);
// console.log(contadora);
// resultado 15 e 14
//Primeiro mostra o valor da variavel original
// e depois mostra o valor dela menos 1


// let contador = 10;
// console.log(--contador);
// console.log(contador);
// resultado 9 e 9
// Primeiro diminui 1 do valor da variavel
// Depois mostra o valor da variavel ja com o calculo feito

// contando pulando de 2 em 2 ou qualquer numero maior
//const passo = 2;
//let contador = 0;
//contador = contador + passo;
//console.log(contador)
//contador = contador + passo;
//console.log(contador)
//contador = contador + passo;
//console.log(contador)

 let contador = 3;
 contador += 2;
 contador += 2;
 contador += 2;
 console.log(contador);
// Assim faz a soma de cada valor atribuido na
// variavel contador = 0; ou o calculo correspondente ao
// operador aritimetico que contem na variavel contador ex:
// contador *= 3; resultado entao seria 24

 