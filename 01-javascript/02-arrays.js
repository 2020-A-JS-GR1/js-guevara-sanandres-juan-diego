const array = [5,6,7,8,9,10];
//array = 1;
let anything = "ABDP";
anything = false;
anything = 0;
anything = undefined;
anything = null;
const whole_array = [
  true, 4, 4.2, "Juan", undefined, null, {}, [0,1,false]
];

// for of
for (let number of array){
  console.log('number', number);
}

// for in
for (let number in array){
  console.log('number', number);
}
// add element at the end
array.push(13);

//remove last element
array.pop();

// add element at startup
array.unshift(4);

console.log(array);

//insert or elminate an element
array.splice(0,3);
console.log(array);
array.splice(0,0,10,11,7);
console.log(array);

//Get element index
const index = array.indexOf(9);
console.log('indice', index);

array.splice(array.indexOf(9),1);

