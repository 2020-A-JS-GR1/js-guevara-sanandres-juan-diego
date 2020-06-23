//04-functions
//Valor a devolver
function just_numbers(a,b,c) {
    return a - b + c;
}
//Undefined
function just_letters(a,b,c){
    console.log(a,b,c);
}
just_numbers('v',true,[1,2,3]);

//Named Functions
function named_function() {}
named_function();
const named_function_two = function () {}; // ANONYMOUS FUNCTION
var named_function_three = function () {}; //UNAMED FUNCTION
let named_function_four = function optional() {}; // ANONYMOUS FUNCTION
named_function_two();
named_function_three();
named_function_four();
//optional() doesn't exist

const named_function_five = ()=>{}; //FAT ARROW FUNCTION
const named_function_six = (x)=>{
  return x+1;
};//
const named_function_seven = (x)=>x+1;
const named_function_eight = x=>x+1;

function add_numbers(initial_number, ...other_number) {//INFINITE PARAMETERS
    return initial_number + other_number
        .reduce((accumulator,value) => accumulator+value,0);
}
console.log(add_numbers(23, 1,2,3,4,6,7,89,0));
