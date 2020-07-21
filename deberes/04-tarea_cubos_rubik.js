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
                    choices: ['Ver Tipos','Crear Tipo','Salir'],
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
                                actual_value => {return actual_value.name}
                            ),
                        },
                    ]);
                    const square_type = rubik_types.find(
                        actual_value => {return actual_value.name === type_selected.type_option;}
                    );
                    const list_squares = square_type.squares.map(
                        actual_value => {return actual_value}
                    );
                    const squares_ids = square_type.squares.map(
                        actual_value => {return actual_value.id}
                    );
                    console.log('ID: ', square_type.id);
                    console.log('Nombre: ', square_type.name);
                    console.log('Region de venta: ', square_type.region);
                    console.log('Se usa en competencias profesionales: ', square_type.professional);
                    console.log('Calificación: ', square_type.rating);
                    let type_options = await inquirer.prompt([
                        {
                            type: 'list',
                            name: 'type_options',
                            message: 'Opciones para tipo',
                            choices: ['Ver cubos', 'Editar tipo', 'Borrar tipo'],
                            loop: false
                        }
                    ]);
                    clear();
                    switch (type_options.type_options) {
                        case 'Ver cubos':
                            let square_menu_option = '';
                            while (square_menu_option!=="Menu Principal"){
                                option_selected = await inquirer.prompt([
                                    {
                                        type: 'list',
                                        name: 'menu_option',
                                        message: 'Terrain Plants',
                                        choices: ['Crear cubo', 'Menu Principal'].concat(squares_ids)
                                    }
                                ]);
                                clear();
                                square_menu_option = option_selected.menu_option;
                                switch (square_menu_option) {
                                    case "Crear cubo":
                                        break;
                                    case "Menu Principal":
                                        break;
                                    default:
                                        const square = list_squares.find(
                                            actual_value => {return actual_value.id === option_selected.menu_option;}
                                        );
                                        console.log('ID: ', square.id);
                                        console.log('Precio: ', square.price);
                                        console.log('Marca', square.brand);
                                        console.log('Diseño', square.dessign);
                                        console.log('Plataformas de obtención', square.media);
                                        break;
                                }
                            }
                            break;
                    }
                    break;
                case 'Crear Tipo':
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
