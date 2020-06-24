function sum(a,b){
    return a+b;
}

sum(1,2);

var sum2 = function(a,b){
    return a+b
};

sum2(3,2)

var sum3 = (a,b) => {
    return a+b
}

sum3(4,8);

var sum4 = (a,b) => a+b;
sum4(5,8);


var square = (x) => x*x;
square(5)

var square2 = x => x*x;
square2(7)

var doSomthing = () => {
    Date.now();
}

doSomthing();


var arr = [1,2,3];
arr.map(x => x*x);
