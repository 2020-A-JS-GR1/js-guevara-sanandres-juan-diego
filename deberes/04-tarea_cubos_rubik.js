const inquirer = require('inquirer');
const clear = require('clear');
const fs = require('fs');

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

function promise_write_file (path, add_content, content){
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
}

async function main (){
    clear();
    console.log('Ofrece y encuentra los cubos de rubik que desees');
    try{
        const rubik_squares_content = await promise_read_file('./cubos_rubik.txt');
        const rubik_types = JSON.parse(rubik_squares_content);

        let main_menu_option = '';
        while (main_menu_option!=='Salir'){
            let option_selected = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'option',
                    message: 'Opciones de Objeto',
                    choices: ['Ver Tipos','Tipos de cubo de Rubik','Salir'],
                },
            ]);
            main_menu_option = option_selected.option;
            switch (main_menu_option) {
                case 'Ver Tipos':
                    let type_selected = await inquirer.prompt([
                        {
                            type: 'list',
                            name: 'type_option',
                            message: 'Escoge un tipo de cubo de Rubik',
                            choices: rubik_types.map(
                                actual_value => {return actual_value.id}
                            ),
                        },
                    ]);
                    const square_type = rubik_types.find(
                        actual_value => {return actual_value.id === type_selected.type_option}
                    );
                    

                case 'Tipos de cubo de Rubik':
                    switch (await function_select()) {
                        case 'Crear':
                            console.log('Crear');
                            break;
                        case 'Actualizar':
                            console.log('Actualizar');
                            break;
                        case 'Eliminar':
                            console.log('Eliminar');
                            break;
                        case 'Menú Principal':
                            break;
                    }
                    break;
                case 'Salir':
                    break;

            }
        }
    }catch (e) {
        console.error(e);
    }
}

async function function_select() {

    const option_selected = await inquirer.prompt([
        {
            type: 'list',
            name: 'option_crud',
            message: 'Opciones para CRUD',
            choices: ['Crear','Actualizar','Eliminar','Menú Principal'],
        },
    ]);

    return option_selected.option_crud;
}

main();
