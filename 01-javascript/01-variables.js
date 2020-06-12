//Mutable

var number_one = 1;
let number_two = 2;

number_one = 5;
number_two = 6;
number_one = true;
number_two = false;
//Immutable
const file_configuration = "PDF";
//file_configuration = "XML";
//Variables Types
const number = 4; //number
const text = "COVID"; //string
const bool = false; //boolean
const love = null; //object
const life = undefined; //undefined
console.log(typeof number);
console.log(typeof text);
console.log(typeof bool);
console.log(typeof love);
console.log(typeof life);

//if/else Clauses
if (true==true){
    console.log("Its True");
}else {
    console.log("Its False");
}

if (true==false){
    console.log("Its True");
}else {
    console.log("Its False");
}

if ("Todos flotan"){
    console.log("Its True");
}else {
    console.log("Its False");
}

if (""){
    console.log("Its True");
}else {
    console.log("Its False");
}

if (-1){
    console.log("Its True");
}else {
    console.log("Its False");
}

if (0){
    console.log("Its True");
}else {
    console.log("Its False");
}

if (1){
    console.log("Its True");
}else {
    console.log("Its False");
}

if (undefined){
    console.log("Its True");
}else {
    console.log("Its False");
}

if (null){
    console.log("Its True");
}else {
    console.log("Its False");
}

//Order of importance
//1. const
//2. let
//3. X -> "var"

//Js object (JSON) - Arrays

const juxx = {
    name:"Juan", //key:value,
    lastname:'Guevara',
    age: 22,
    inlove: false,
    money: null,
    sad: undefined,
    girls: {
      number:4,
      cute: true,
    },
    pets: ['Chiquita','Lio','Jack'],
}; //object
const number_array = []; //object
console.log(juxx);
console.log(number_array);
