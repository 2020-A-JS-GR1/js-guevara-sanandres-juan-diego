const juxx = {
    name: "Juan",
};
const karito = {
    lastname: "joha",
};
const array_one = [1,2,3,4,5];
const array_two = [6,7,8,9,10];

const juxx_karito = {
    ...juxx,
    ...karito,
};
juxx_karito.name = "johanna";
console.log('Juxx Karito', juxx_karito);
console.log('Orignial juxx',juxx);

const super_array = [
    ...array_one,
    ...array_two
];

super_array[0] = 100;
console.log('Super arreglo', super_array);
console.log('Array 1 Original', array_one);
