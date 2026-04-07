
const r = require('readline-sync');

// média com do while

let somadowhile =0;
let contadorDoWhile = 1;

do{
    let nota = parseFloat(r.question('Nota ${contadorDoWhile}:'));
    somadowhile += nota;
    contadorDoWhile++;

} while(contadorDoWhile <= 5);

let mediadowhile = somadowhile / 5;
console.log("a média é: " + mediadowhile.toFixed(2));