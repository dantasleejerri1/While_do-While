
const r = require('readline-sync');

// variaveis
let soma = 0;
let contador = 1;

//contador para controlar o numero de notas
while( contador <=5) {

    // solicita a nota do usuário
    let nota = parseFloat(r.question(`Nota ${contador + 1}: `));

    // realiza o calculo das notas, 4 notas.
    soma += nota;

    // incremta o contador para a próxima nota
    contador++;
}

// define a media a soma da 4 notas dividida por 4, para obter a media
let media = soma / 5;
//printa a média e sua toFixed para limitar a 2 casas decimais.
console.log("A média é: " + media.toFixed(2));
