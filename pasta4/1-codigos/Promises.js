function doSomething(callback)
{
    setTimeout(function()
    {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThingProm(callback)
{
    setTimeout(function()
    {
        // did other thing
        callback('Second data');
    }, 1000);
}



/**
 * Um promises pode ter três estados: 
 *  - Pendint
 *      Quando ela está pendente
 *  - Fulfilled 
 *      Quando ela terminou de rejeitar 
 *  - Rejected 
 *      Quando aconteceu algum erro
*/



const doSomethingPromises = new Promise((resolve, reject) => {
    setTimeout(function(){
        // did something
        resolve('First data');
        
    }, 1000);
});

const doOtherThingPromises = new Promise((resolve, reject) => {
    setTimeout(function() {
        // did something
        resolve('Second data');
    }, 1000);
});

doSomethingPromises.then(data => console.log(data));