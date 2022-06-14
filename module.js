const person= require('./person');
let jose = new person('Jose');
jose.on('habla',(message)=>{
    console.log(`${jose.name}: ${message}`);
})
jose.emit('habla','Today is a great day');