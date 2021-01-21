var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

// maneira antiga

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];


// Destructuring Assignment 

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['tomoto']];

console.log(apple, apple2);
console.log(tomato, tomato2);

var obj = {
    name: 'Celso',
    idade: 32
}

var nome = obj.name;

// Destructuring Assignment 

var { name, idade } = obj

console.log(nome, idade);

// destructring de array dentro de um objeto

var obj1 = {
    alunos: ['Lucas', 'joão', 'fernando'],
    idades: [34, 56, 78]
}

var {alunos: [lucas, joao, fernando]} = obj1

console.log(lucas)

// destructring de objeto dentro de array

var arr = [{nome: 'lucas'}]

var [{nome}] = arr;

console.log(nome);

var arr = [{name: 'Apple', type: 'fruit'}]

var obj = {
    name: 'Celso', 
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var fruit1 = arr[0].name;

// Destructuring Assignment 

let [{name: fruitName}] = arr;

// functions 

function sum(arr){
    return arr[0] + arr[1]
}

console.log(sum([5, 5]));




