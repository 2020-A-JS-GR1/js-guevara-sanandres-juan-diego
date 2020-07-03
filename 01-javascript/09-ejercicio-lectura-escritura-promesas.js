const fs = require('fs');
/*

*/
const path_file = '09-ejercicio-lec-esc-promesas.txt';
const contenido = 'hola';

function promise_read_file(path){
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, content)=>{ error ? reject(error) : resolve(content);},
            );
        }
    );
}

function promise_write_file(path, add_content, content){
    return new Promise(
        (resolve, reject) =>{
            fs.writeFile(
                path,
                content + '\n' + add_content,
                'utf-8',
                (error) => {error ? reject(error) : resolve(path);},
            );
        }
    );
}

function ejercicio(path, new_content){
    promise_read_file(path)
        .then(
            content => {
                console.log('Contenido incial --------------', content);
                return promise_write_file(path, new_content, content);
            }
        )
        .then(
            path => {
                return promise_read_file(path);
            }
        )
        .then(
            content => console.log('Contenido nuevo --------------', content)
        )
        .catch(
            error => console.log('Error', error)
        );
}

ejercicio(path_file, contenido);
