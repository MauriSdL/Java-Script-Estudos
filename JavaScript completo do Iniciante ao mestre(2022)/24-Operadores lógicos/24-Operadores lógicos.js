//- Operadores Lógicos
// AND representado por-> &&
// OR representado por-> || Esse simbolo é o piper que são 2 barras em pé
// NOT representado por-> !

// Presedencia dos operadores logicos
// Primeiro &&
// Depois ||

// Para inverter a presedencia, usa-se parenteses nos pipers
// ex:(varial >= variavel || varial <= variavel) && variavel

let idade = 18;
let paisPresentes = true;
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);
console.log(typeof podeViajar);

// EX:2
n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`);
console.log((3 * 2) ** 2)
