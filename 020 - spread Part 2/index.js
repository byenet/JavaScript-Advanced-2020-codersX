
//Shallow copying và Deep copying (clone)

// Shallow
// spread an array

const a = [1,2,3];
const b = [0, ...a, 4];
console.log(b);


// spread an object
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 10}
};

// neu lam kieu nay khi thay doi gia tri obj2 thi 1 cung thay doi => khong lam
// let obj2 = obj1;

// clone thu cong
let obj2 = {};
for (let key in obj1){
    obj2[key] = obj1[key];
}

console.log(obj2);
obj2.b = 5;
console.log({obj1, obj2});

// neu dung cai nay van co the bi thay doi gia tri
obj2.d.e = 11;
console.log({ obj1, obj2 });

// dung spread de clone
let obj3 = {...obj1};
console.log({ obj1, obj3 });
obj3.d.e = 11;




