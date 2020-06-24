// hoisting
var x;
console.log(x);

var x = 5;

function run(){
    console.log(x);

    var x=10
}

run();

for(var i=0; i<5;i++){
    console.log(i);
    var z = 6;
}

console.log("i ben ngoai: "+i);
console.log("z ben ngoai: "+ 6);

{
    var b = 7;
}

console.log("b ben ngoai: "+b);

function run2(){
    var m = 5;
    console.log(m);
    
}

run2()

console.log(m);
