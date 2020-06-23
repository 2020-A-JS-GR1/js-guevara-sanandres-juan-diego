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
const every_response = array
    .every(
        (actual_value, index, whole_array)=>{
            return actual_value.grade < 14;
        }
    );

console.log('Respuesta Every', every_response);
//OR
//Some grade less than 9? True or False
const some_response = array
    .some(
        (actual_value, index, whole_array)=>{
            return actual_value.grade < 4;
        }
    );

console.log('Respuesta Some', some_response);

//REDUCE left -> right
//REDUCERIGTH right -> left

const reduce_response = array
    .reduce(
        (accumulator_value, actual_value, index, whole_array)=>{
            return accumulator_value - actual_value.grade;
        },
        500 // Accumulator
    );
console.log('Respuesta Reduce', reduce_response);

const student_number_less_nine_array = array
    .map((actual_value)=>actual_value.grade*1.3)
    .filter((grade)=>grade < 9);
const total_points = student_number_less_nine_array
    .reduce((accumulator,actual) => accumulator + actual,0);
const average_grade = total_points/student_number_less_nine_array.length;
console.log('Nota Promedio', average_grade);

