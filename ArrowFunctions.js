function log(value){
    console.log(value);
}

log('test');

// função que não precisa ter nome

var somaOld = function(a, b){
    return a + b;
};

// Arrow functions 

var somaNew = (a, b) => {
    return a + b;
};

console.log("Soma antiga " + somaOld(5, 6));
console.log("Soma nova " + somaNew(5, 6));

// retornar objetos literais com return implicito

var createObj = () => ({ teste: 123 });
console.log(createObj['teste']);

var obj = {
    showContext:  function showContext(){
        
        setTimeout(() => {
            this.log("after 1000ms");
            }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

obj.showContext();
