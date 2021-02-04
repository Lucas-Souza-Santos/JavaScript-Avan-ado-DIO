class CustomError extends Error {
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}


try{
    const name = 'Lucas santos';

    const myError = new CustonError('Custom message',{
        type: 'Server error'
    });

    throw myError;
}catch(err){
    console.log('Error ', err);
} finally{
    console.log("Keep going...");
}
