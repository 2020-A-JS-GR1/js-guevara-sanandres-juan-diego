const fs = require('fs');

const promise_read_file = (path)=>{
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, content)=>{ error ? reject(error) : resolve(content);},
            );
        }
    );
};

const promise_write_file = (path, add_content, content)=>{
    return new Promise(
        (resolve, reject) =>{
            fs.writeFile(
                path,
                content + '\n' + add_content,
                'utf-8',
                (error) => {error ? reject(error) : resolve();},
            );
        }
    );
};

async function task(path, new_content) {
    try{
        const file_content = await promise_read_file(path);
        await promise_write_file(path,new_content,file_content);
        const new_file_content = await promise_read_file(path);
        console.log(new_file_content);
    }catch (e) {
        console.error(e);
    }
}

const promise_task = task('03-tarea_promesas.txt','Tarea Terminada XD');
console.log('Promesa', promise_task);
