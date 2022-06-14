const EventEmitter = require('events').EventEmitter;
const util = require('util');

var Person= function(name){
   this.name = name;
}
util.inherits(Person, EventEmitter);
let person= new Person("juanito");

person.on('hablar', (message)=>{
   console.log(`${person.name}: ${message}`);

});
person.emit('hablar','Today is a great day');
/* emitter.on('eventCustom', (message, status)=>{
console.log(`${status}: ${message}`);
}) ;
emitter.emit('eventCustom', 'Mensaje cargado con exito',200); */