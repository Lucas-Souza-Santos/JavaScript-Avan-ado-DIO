/***
 * O spread operator funciona em: 
 *  strings, arrays, objects e objetos iteraveis
 * 
 * O spread operator tem a função de quebrar os itens passar para 
 * algum lugar. 
 */

const str = 'Digital Innovation One';

function logArgs(...args){
    console.log(args)
}

// logArgs(...str);
const arr = [1, 2, 3, 4];
// logArgs(arr);

const arr2 = [...arr, 5, 6, 7];

console.log(arr2);

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);

/**
 * Não pode usar o spread para construir um novo array, só pode ser 
 * usado o spread em objetos iteraveis
 * 
 * os objetos literais não são iteraveis
 * 
 * exemplo 
 * const obj = {
 *      test: 123
 * }
 * 
 * const arr = [...obj]
 * 
 * console.log(arr)
 * 
 * Só posso usar o spread em objetos para construir novos objetos
 * 
 * A ordem que é feita o spread é importante
*/

// usado para gerar clone do primeiro objetos
// shallow clone
const obj3 = {...obj2};

console.log(obj3);





