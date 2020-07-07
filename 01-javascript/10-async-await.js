const promise_read_file = ()=>{
    return new Promise(
        (resolve,reject)=>{
            resolve('Contenido leido');
        }
    );
};

const promise_write_file = ()=>{
    return new Promise(
        (resolve,reject)=>{
            resolve('Contenido escrito');
            reject('Error :c');
        }
    );
};

async function exercise() {
    console.log('1');
    try{
        console.log('2');
        const file_content = await promise_read_file();
        console.log(file_content);
        console.log('3');
        await promise_write_file();
        console.log('4');
        const new_file_content = await promise_write_file();
        console.log('5');
        console.log(new_file_content);
    }catch (e) {
        console.error(e);
    }
    console.log('6');
}

const answer_exercise = exercise();
//console.log('Respuesta ejercicio', answer_exercise);
//console.log('Promesa Lectura', promise_read_file());
//console.log('Promesa Escritura', promise_write_file());

/*
const fun = async ()=>{
};
*/
