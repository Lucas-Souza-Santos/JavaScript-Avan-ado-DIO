/**
 * - Symbols é uma maneira de gerar um indetificador único
 * - Um symbols não é igual ao outro
 * - não é um texto, não é um número, ele é um indetificador único
 * - Pode ser usado para gerar propriedades privadas
 * - Symbols possui a propriedade Well Know Symbols
 * 
*/

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));

console.log(uniqueId === uniqueId2);

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

while(true){
    let { value, done} = it.next()
    if(done){
        break;
    }
    console.log(value);
}
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

for (let value of arr){
    console.log(value);
}


Symbol.iterator;

const arr = [1, 2, 3, 4];
//const it = arr[Symbol.iterator]();

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;
                return{
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};


for(let value of obj){
    console.log(value);
}


const it = obj[Symbol.iterator]()

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const arr2 = [...obj];
console.log(arr2);

