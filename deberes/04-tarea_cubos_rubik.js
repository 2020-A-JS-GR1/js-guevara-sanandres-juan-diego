const inquirer = require('inquirer');
const clear = require('clear');
const fs = require('fs');

const continents = ['America','Europa','Asia','Africa','Oceanía'];

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

function promise_write_file (path, add_content){
    return new Promise(
        (resolve, reject) =>{
            fs.writeFile(
                path,
                add_content,
                'utf-8',
                (error) => {error ? reject(error) : resolve();},
            );
        }
    );
}

function createNewId(rubik_types){
    try {
        const newId = parseInt(rubik_types[rubik_types.length - 1].id) + 1;
        return newId.toString().padStart(3, '0');
    }catch (e) {
        return '001'
    }
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
                    const type_index = rubik_types.findIndex(
                        actual_value => {return actual_value.id === square_type.id;}
                    );
                    console.log('ID: ', square_type.id);
                    console.log('Nombre: ', square_type.name);
                    console.log('Región de popularidad: ', square_type.region);
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
                                        console.log('Crear cubo');
                                        let square_information = await inquirer.prompt([
                                            {
                                                type: 'input',
                                                name: 'price',
                                                message: 'Precio del cubo',
                                                validate: function (value) {
                                                    let pass = value.match(/^[0-9]+\.[0-9]+$/);
                                                    if(pass){
                                                        return true;
                                                    }
                                                    return 'Por favor ingrese un número válido Ejemplo: 23.05'
                                                }
                                            },
                                            {
                                                type: 'input',
                                                name: 'brand',
                                                message: 'Marca del cubo',
                                            },
                                            {
                                                type: 'list',
                                                name: 'dessign',
                                                message: '¿Qué diseño le gustaría?',
                                                choices: ['Orginal','Personalizado'],
                                            },
                                            {
                                                type: 'checkbox',
                                                name: 'media_option',
                                                message: 'Escoja una o varias opciones con la barra espaciadora',
                                                choices: ['Amazon','OLX','Mercado Libre'],
                                            },
                                            {
                                                type: 'confirm',
                                                name: 'confirm_square',
                                                message: '¿Desea registrar los datos ingresados?',
                                                default: false
                                            }
                                        ]);
                                        let confirmation = square_information.confirm_square;
                                        if(confirmation === true){
                                            rubik_types[type_index].squares.push({
                                                id: createNewId(list_squares),
                                                price: square_information.price,
                                                brand: square_information.brand,
                                                dessign: square_information.dessign,
                                                media: square_information.media_option,
                                            });
                                        }else{
                                            console.log('Se canceló la creación');
                                        }
                                        await promise_write_file('./cubos_rubik.txt', JSON.stringify(rubik_types));
                                        break;
                                    case "Menu Principal":
                                        break;
                                    default:
                                        const square = list_squares.find(
                                            actual_value => {return actual_value.id === option_selected.menu_option;}
                                        );
                                        console.log('ID: ', square.id);
                                        console.log('Precio: ', square.price);
                                        console.log('Marca:', square.brand);
                                        console.log('Diseño:', square.dessign);
                                        console.log('Plataformas de obtención:', square.media);
                                        let square_options = await inquirer.prompt([
                                            {
                                                type: 'list',
                                                name: 'square_option',
                                                message: 'Opciones para tipo',
                                                choices: ['Borrar cubo', 'Editar cubo', 'Volver'],
                                                loop: false
                                            }
                                        ]);
                                        switch (square_options.square_option) {
                                            case 'Borrar cubo':
                                                const square_to_delete_index = list_squares.findIndex(
                                                    actual_value => {return actual_value.id === square.id;}
                                                );
                                                rubik_types[type_index].squares.splice(square_to_delete_index);
                                                console.log('Cubo eliminado exitosamente');
                                                await promise_write_file('./cubos_rubik.txt', JSON.stringify(rubik_types));
                                                break;
                                            case 'Editar cubo':
                                                const square_to_edit = list_squares.find(
                                                    actual_value => {return actual_value.id === square.id;}
                                                );
                                                const square_to_index = list_squares.findIndex(
                                                    actual_value => {return actual_value.id === square.id;}
                                                );


                                                break;
                                        }
                                        break;
                                }
                            }
                            break;
                        case 'Editar tipo':
                            const type_to_edit = rubik_types.find(
                                actual_value => {return actual_value.id === square_type.id;}
                            );
                            let answer = false;
                            while (answer!==true){
                                const attribute_options = Object.keys(type_to_edit);
                                attribute_options.splice(0,1);
                                attribute_options.splice(-1,1);
                                let edit_type_option = await inquirer.prompt([
                                    {
                                        type: 'list',
                                        name: 'edit_option',
                                        message: 'Seleccione que desea editar',
                                        choices: attribute_options.concat('Finalizar'),
                                        loop: false
                                    }
                                ]);
                                console.log(edit_type_option.edit_option);
                                switch (edit_type_option.edit_option) {
                                    case 'name':
                                        let name_answer = await inquirer.prompt([
                                            {
                                                type: 'input',
                                                name: 'name_type',
                                                message: 'Nombre del tipo',
                                                default: 'No especificado',
                                            },
                                        ]);
                                        type_to_edit.name = name_answer.name_type;
                                        break;
                                    case 'region':
                                        let region_answer = await inquirer.prompt([
                                            {
                                                type: 'list',
                                                name: 'continent',
                                                message: 'Region de popularidad',
                                                choices: continents,
                                            },
                                        ]);
                                        type_to_edit.region = region_answer.continent;
                                        break;
                                    case 'professional':
                                        let professional_answer = await inquirer.prompt([
                                            {
                                                type: 'confirm',
                                                name: 'is_professional',
                                                message: '¿Se usa en competencia profesional?',
                                                default: false
                                            },
                                        ]);
                                        type_to_edit.professional = professional_answer.is_professional;
                                        break;
                                    case 'rating':
                                        let rating_answer = await inquirer.prompt([
                                            {
                                                type: 'input',
                                                name: 'type_rating',
                                                message: 'Calificación (1 a 5 se pueden usar números decimales)',
                                            },
                                        ]);
                                        type_to_edit.rating = rating_answer.type_rating;
                                        break;
                                    case 'Finalizar':
                                        let confirmation = await inquirer.prompt([
                                            {
                                                type: 'confirm',
                                                name: 'confirm_type',
                                                message: '¿Desea registrar los datos ingresados?',
                                                default: false
                                            }
                                        ]);
                                        if (confirmation.confirm_type) {
                                            rubik_types[type_index] = type_to_edit;
                                            await promise_write_file('./cubos_rubik.txt', JSON.stringify(rubik_types));
                                            answer = true;
                                        } else {
                                            console.log('Se canceló la edición');
                                        }
                                        break;
                                }
                            }
                            break;
                        case 'Borrar tipo':
                            const type_to_delete_index = rubik_types.findIndex(
                                actual_value => {return actual_value.id === square_type.id;}
                            );
                            rubik_types.splice(type_to_delete_index);
                            console.log('Tipo de cubo borrado exitosamente');
                            await promise_write_file('./cubos_rubik.txt', JSON.stringify(rubik_types));
                            break;
                    }
                    break;
                case 'Crear Tipo':
                    console.log('Crear tipo de cubo');
                    let type_information = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name_type',
                            message: 'Nombre del tipo',
                            default: 'No especificado',
                        },
                        {
                            type: 'list',
                            name: 'continent',
                            message: 'Region de popularidad',
                            choices: continents,
                        },
                        {
                            type: 'confirm',
                            name: 'is_professional',
                            message: '¿Se usa en competencia profesional?',
                            default: false
                        },
                        {
                            type: 'input',
                            name: 'type_rating',
                            message: 'Calificación (1 a 5 se pueden usar números decimales)',
                        },
                        {
                            type: 'confirm',
                            name: 'confirm_type',
                            message: '¿Desea registrar los datos ingresados?',
                            default: false
                        }
                    ]);
                    let confirmation = type_information.confirm_type;
                    if(confirmation === true){
                        rubik_types.push({
                            id: createNewId(rubik_types),
                            name: type_information.name_type,
                            region: type_information.continent,
                            professional: type_information.is_professional,
                            rating: type_information.type_rating,
                            squares: []
                        });
                    }else{
                        console.log('Se canceló la creación');
                    }
                    await promise_write_file('./cubos_rubik.txt', JSON.stringify(rubik_types));
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
