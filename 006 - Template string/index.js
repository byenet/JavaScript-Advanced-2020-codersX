// Template string 

function greeting(name){
    return 'Hi, ' + name + "!";
}

var result = greeting('huy');

console.log(result);


function greeting2(name){
    return `Hi, ${name}${1+1}!`;
};

var result2 = greeting2('huy');
console.log(result2);
