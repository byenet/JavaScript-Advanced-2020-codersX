// ... spread operator

const a = [1,2,3];

const b = [...a];

console.log(b);

const c = [0, ...a, 4];
console.log(c);

const d = [...a,...b];
console.log(d);



function sum(...numbers){
    let sum = 0;
    numbers.map(item => sum+=item);
    return sum
}

console.log('sum la: '+ sum(...a));
console.log('sum la: '+ sum(1,2,3,4,5));
