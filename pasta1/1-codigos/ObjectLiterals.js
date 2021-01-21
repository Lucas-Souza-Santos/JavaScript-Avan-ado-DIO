var prop1 = 'Digital Innovation One'

var obj = {
    prop1
};

console.log(obj.prop1);

function method1() {
    console.log('method called');
}

var obj = {
    method1
}

console.log(obj.method1);

var obj =  {
    sum(a, b){
        return a + b;
    }, 
    multiplica(a , b){
        return a * b;
    }
}

console.log(obj.sum(5, 6));
console.log(obj.multiplica(5, 6));

var obj = {

    sleep: function() {
  
      setTimeout(() => {
  
        console.log(this);
  
      }, 1000);
  
    }
  
  }
  
  
  
  obj.sleep();
