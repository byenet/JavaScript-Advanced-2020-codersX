// Array-like Object & arguments


// Duyet array binh thuong
const names = ['Thanh', 'Trang', 'Thuy'];

for(let i=0; i< names.length; i++) {
    console.log(names[i]);
}


// Array link Object (tuc la object ma giong array nhung khong co cac method cua array)
const obj = {
    0: 'Thanh obj',
    1: 'Trang obj',
    2: 'Thuy obj', 
    length: 3
};

for (let i = 0; i < obj.length; i++) {
  console.log(obj[i]);
}


// ---------------------------------
// arguments la 1 bien ton tai ben trong scope 1 ham (1 function khong phai arrow function)

function sum(){
    console.log(arguments);
    console.log(arguments.length);
    // => day la 1 array like object
    let result = 0;
    for(let i = 0; i< arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

sum(1,2,3,4,5);
console.log(sum(1, 2, 3, 4, 5));


function sum2(){
    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum, num){
        return sum+num;
    }, 0);
}

console.log(sum2(1, 2, 3, 4, 5));
