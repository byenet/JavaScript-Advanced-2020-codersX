// value types vs reference types

let a1 = 1;
let a2 = 1;
console.log(a1 === a2);

let obj1 = {a: 1};
let obj2 = {a: 1};

console.log(obj1 === obj2);


let a3 = a2;
a3 = 2;
console.log(a2);

let obj3 = obj2;
obj3.a = 2;
console.log(obj2);
obj2.a = 3;
console.log(obj3);



let a4 = a2;
console.log(a4 === a2);
a4 = 2;
console.log(a4 === a2);

let obj4 = obj2;
console.log(obj4 === obj2);
obj4.a = 2;
console.log(obj4 === obj2);


// neu dung trong function thi no lam thay doi 1 object o ben ngoai no => rat nguy hiem => kho kiem soat => tranh thay doi dau vao cua ham do.
function log(x) {
    x.b = 5;
}

log(obj1);

console.log(obj1);



