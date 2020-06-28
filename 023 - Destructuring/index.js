// desstructuring => dung cho array va object
const arr = [10,20,30,40,50];

// chi co array moi lam duoc kieu nay
const [a,b,c,d,e] = arr;
console.log('a,e: '+ a,e);

const [f, , , ,g] = arr;
console.log('f,g: '+ f,g);

const [i, ...j] = arr;
console.log('i,j: '+ i,j);

const arr2 = [10]
const [x,y=20] = arr;
console.log('x,y: '+ x,y);


// voi object

const obj = {
    a2:1,
    b2:2,
    c2:3
};

const {a2:n ,b2:m,c2:l} = obj;
console.log('n,m,l: ' + n,m,l); 

// => gan bien a2 b2 c2 
// const { a2: a2, b2: b2, c2: c2 } = obj;
// console.log("a2,b2,c2: " + a2, b2, c2);
// => co the viet gon lai Thanh
// const {a2,b2,c2} = obj
// console.log("a2,b2,c2: " + a2, b2, c2);

const {a2, ...c2} = obj;
console.log("a2,c2: " + a2,c2);

