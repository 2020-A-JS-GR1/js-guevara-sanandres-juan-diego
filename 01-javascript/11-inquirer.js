const inquirer = require('inquirer');

async function main (){
    try{
        const response = await inquirer.prompt([
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa tu nombre',
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa tu edad',
            }
        ]);
        console.log('Respuesta', response)
    }catch (e) {
        console.error(e);
    }
}

main();
