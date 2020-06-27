
const fs = require('fs');

console.log('Primero');
fs.readFile( //ASINCRONA
    './06-ejemplo.txt',
    'utf-8',
    (error, content)=>{ //CALLBACK
        console.log('Segundo');
        if (error){
            console.error('Hubo error', error);
        }else{
            console.log('Contenido',content);
        }
    }
);
const add = 13 + 4;
console.log('Suma', add);
console.log('Final');
