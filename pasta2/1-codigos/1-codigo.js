function sum1(a, b){
    return a + b;
}

console.log(sum1(5, 6));

/**
 * E se eu quisesse passar um mumero ilimitados de 
 * parâmetros e somar todos eles
 */

 // jeito antigo

function sum2(a, b)
{
    console.log(arguments)
    var value = 0;
    for(var i = 0; i < arguments.length; i++)
    {
        value += arguments[i];
    }
    return value;
}

console.log(sum2(5, 6, 7, 8, 9, 10))
