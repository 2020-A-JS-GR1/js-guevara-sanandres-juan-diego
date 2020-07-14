
function add_Numbers(
    initial_number: number,
    ...numbers_to_sum: number[]
): number{
    return initial_number;
}

add_Numbers(1, 12,4,3,23,4);

function print(message: string): void {
    console.log('Hola' + message);
}

const numbers_array: number[]= [2,4,6];
const numbers_array_two: Array<number>= [2,4,6];
const numbers_array_three: (number | boolean | string)[]= [2,true,'hola'];
const numbers_array_four: Array<number | boolean | string>= [2,true,'hola'];
const numbers_array_five: number[] | string[]= [2,4]; // ['hola','como','estas']
