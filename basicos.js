//var path=require("path");
// var a=5;
// var b=10;

// console.log(`El resultado es: ${a+b}`);
// console.log(path.basename(__dirname));

/* function params(p){
    var index=process.argv.indexOf(p);
    console.log(index);
    return process.argv[index+1];
    
}
var name =params('--nombre');
var age =params('--edad')
console.log(`mi nombre es : ${name} y tengo ${age} de edad`); */
//----------------------------------------------------------------------
/*  var quetions=[
    'What you name?',
    'How old are you?',
    'What is your favorite programing language?',
    'Tell me a secret?'
]; */
/*
var answers=[];
function quetion(i){
    process.stdout.write(quetions[i]);
}

process.stdin.on("data",function(data) {
    answers.push(data.toString());
    if (answers.length<quetions.length ){
        quetion(answers.length);
    }else{
        process.exit;
    }
                // process.stdout.write("Your name is "+ data.toString());
                // process.exit();
});
quetion(0);
 */
//---------------------------module--------------------------------------------------------
/*  var path=require("path");
 var util = require('util');
 var v8= require("v8");
 

 var nombre="Cleiry";
 var edad=29;
 var text= util.format(" Hola soy $s, tengo $d edad ",nombre,edad);
 util.log(text);
//console.log(path.join('www.','img','index','uploads'));
console.log(v8.getHeapStatistics()); */
//--------------------------readLine Module--------------------------------------------------
var readline = require('readline');
var util = require('util');

var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
    nombre: '',
    comentarios: []
};

rl.question('Cuál es tu nombre? ', (respuesta) => {
    persona.nombre = respuesta;

    rl.setPrompt('Dime un comentario: ');
    rl.prompt();

});

rl.on('line', (input) => {
    if(input.trim() === 'salir'){
        var mensaje = util.format("Te llamas %s y esto me dijiste: %j", persona.nombre, persona.comentarios);
        console.log(mensaje);
        process.exit();
    }
    persona.comentarios.push(input.trim());

    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
});
