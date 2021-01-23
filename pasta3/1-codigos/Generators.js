/**
 * Generator são funções com pausa
*/

function* hello(){
    console.log('Hello');
    yield 1; // através dessa palavra reservada consiguimos fazer pausas
    console.log('From');
    var value = yield 2; // através dessa palavra reservada consiguimos fazer pausas
    console.log(value);
}

const it = hello();

// o prototypo de generator tem um next
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside'));

// ele pode ser usado para construir iteradores


function*  naturalNumbers(){
    let number =0;
    while(true){
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


// posso usar o meu genarator para construir a 
// interface de iterações dos meus objetos iteraveis

const uniqueId = Symbol('Hello');

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

// Generators 

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for(var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for(let value of obj){
    console.log(value);
}