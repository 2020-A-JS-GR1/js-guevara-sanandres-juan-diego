const array = [
    {
        id: 1,
        name: 'juxxi',
        grade: 7,
    },
    {
        id: 2,
        name: 'camch',
        grade: 9,
    },
    {
        id: 3,
        name: 'insu',
        grade: 8,
    },
    {
        id: 4,
        name: 'lord',
        grade: 7,
    },
    {
        id: 5,
        name: 'as16',
        grade: 10,
    },
    {
        id: 6,
        name: 'dacer',
        grade: 11,
    },
    {
        id: 7,
        name: 'alexis',
        grade: 8,
    },
    {
        id: 8,
        name: 'micnay',
        grade: 5,
    },
    {
        id: 9,
        name: 'skere',
        grade: 9,
    },
    {
        id: 10,
        name: 'zacron',
        grade: 4,
    }
];

//functions as parameters
const response_find = array
    .find(
        function (actual_value, index, whole_array) {
            console.log('Valor actual', actual_value);
            console.log('Indice', index);
            console.log('Arreglo completo', whole_array);
            return actual_value.name === 'as16';
        }
    );
console.log('Respuesta', response_find);

const index_find = array
    .findIndex(
        function (actual_value, index, whole_array) {
            console.log('Valor actual', actual_value);
            console.log('Indice', index);
            console.log('Arreglo completo', whole_array);
            return actual_value.name === 'lord';
        }
    );
console.log('Indice', index_find);

//ForEach
const for_each_response = array
    .forEach(
        //Anonymous function
        function (actual_value, index, whole_array) {
            console.log('Valor actual', actual_value);
            console.log('Indice', index);
            console.log('Arreglo completo', whole_array);
        }
    );
console.log('For Each', for_each_response); //undefinded
//MAP
const map_response = array
    .map(
        //Fat arrow function
        (actual_value, index, whole_array) => {
            const new_element = {
                id: actual_value.id,
                name: actual_value.name,
                grade: actual_value.grade +1,
            };
            return new_element
        }
    );

console.log('MAP', map_response);

const new_map_response = array
    .map(
        function (actual_value, index, whole_array) {
            return actual_value.grade;
        }
    );
console.log('MAP Notas', new_map_response);

//FILTER
const filter_response = array
    .filter(
        (actual_value, index, whole_array) => {
            return actual_value.grade >= 9;
        }
    );
console.log('Filtro Notas', filter_response);

//AND
//EVERY
const answer_every = array
    .every(
        (actual_value, index, whole_array)=>{
            return actual_value.grade < 14;
        }
    );

console.log('Respuesta Every', answer_every);
//OR
//Some grade less than 9? True or False
const answer_some = array
    .some(
        (actual_value, index, whole_array)=>{
            return actual_value.grade < 4;
        }
    );

console.log('Respuesta Some', answer_some);
