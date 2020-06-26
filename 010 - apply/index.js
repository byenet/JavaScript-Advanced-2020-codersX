// call: func.call(this, param1, param2,...);
// apply: func.apply(this, [param1, param2,...]);


function greeting2() {
  console.log(`Hi! ${this.name}, I am ${this.age}`);
}

var cat = {
    name: 'Tom2', 
    age: '12'
};

greeting2.apply(cat);



function sum(){
  const numbers = Array.from(arguments);
  return numbers.reduce((sum, number) => sum + number, 0);
};

function average(){
  // sum 
  const x = sum.apply(null,arguments);

  // sum / arguments
  return x/arguments.length;

}

console.log(average(1,2,3,4));



const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
