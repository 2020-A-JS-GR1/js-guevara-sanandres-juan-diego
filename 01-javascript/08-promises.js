const fs = require('fs');

function promise_is_Even(number) {
    return new Promise(
        (resolve, reject) => {
            number % 2 === 0 ? resolve(number): reject('No es par :c');
        }
    );
}

function promise_pow(number) {
    return new Promise(
        (resolve, reject) => {
            const even_number_pow = Math.pow(number,2);
            resolve(even_number_pow);
        }
    );
}

promise_is_Even(3)
    .then(
        even_number => {
            console.log('Contenido Then', even_number);
            /*NO HACER ESTO*/
            return promise_pow(even_number);
        }
    )
    .then(
        even_number_pow => console.log('Número par al cuadrado', even_number_pow)
    )
    .catch(
        error => console.error('Contenido Catch', error)
    );


