// rest operator ...
/**
 * quando for passado esse três pontos dentro
 * dos argumentos de uma função é o rest operator
 * */

function sum3(...valor)
{   
    var soma = 0;
    for(var i = 0; i < valor.length; i++){
        soma += valor[i];
    }
    console.log("SOMA = " + soma);

    return valor.reduce((acc, value) => acc + value, 0 );

}

console.log("SOMA = " + sum3(5, 6, 5, 6, 7, 8));

/**
 * No caso de array function o uso de arguments é 
 * indefinido. Então é preciso usar rest operator 
 * para trabalhar com array function
 * 
*/

// o rest operator pode ser usado para pegar os
// parâmetro restante

const sum4 = (a, b, ...resto) => {
    console.log("a = " + a + 
    " b = " + b + 
    " resto = " + resto);
};

console.log(sum4(5, 5, 6, 7, 8));

const multiply = (...arg) =>
AbortSignal.reduce((acc, value) =>
acc * value, 1);
