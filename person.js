const EventEmitter = require('events').EventEmitter;
const util = require('util');

var Person= function(name){
   this.name = name;
}
util.inherits(Person, EventEmitter);

module.exports= Person;