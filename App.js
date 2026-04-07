const r = require('readline-sync');

let nota;

do {
    nota = parseFloat (r.question(" Óla Rodrigo digite a nota (0 a 10 ): "));

    if(nota < 0 || nota > 10) {
        console.log("Nota inválida. Digite uma nota entre (0 e 10).");
        
    }

}while (nota < 0 || nota > 10);

console.log("Nota válida: " + nota);