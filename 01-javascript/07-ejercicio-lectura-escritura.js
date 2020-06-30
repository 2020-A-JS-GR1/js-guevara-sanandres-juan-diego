const fs = require('fs');
/*
Hacer una función que me acepte como parametro una variable
con el path del archivo y con el contenido que se va agregar
al archivo. La función toma 2 parámetros y debe leer el archivo
y añadir el texo al final
*/

function write_File(path, fileContent) {
    fs.readFile(
        path,
        'utf-8',
        (error, content) => {
            error ? console.log(error) : fs.writeFile(
                path,
                content + '\n' +fileContent,
                'utf-8',
                (error) => {error ? console.log(error) : console.log('Escritura completada');},
            );
        },
    );
    /*fs.appendFile(
        path,
        fileContent,
        'utf-8',
        (error) => {error ? console.log(error) : console.log('Escritura completada');},
    );
    */
}

write_File('./06-ejemplo.txt','Lo he conseguido x4');
