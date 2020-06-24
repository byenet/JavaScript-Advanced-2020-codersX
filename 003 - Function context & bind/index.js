// global context
// function context()
// bind

var mouse = {
    name: 'Mickey',
    sayHi: function(){
        console.log('Hi, my name is ', this.name);
    }
}

var cat = {
    name: 'Tom'
};

// mouse.sayHi()
var say = mouse.sayHi.bind(mouse);
// say = function(){console.log...}

var say = mouse.sayHi.bind(cat)

say();

var button = document.getElementById('smartBtn');

button.addEventListener('click', mouse.sayHi.bind(mouse));


function run(cb){
    // console.log('run...');
    cb();
}

run(mouse.sayHi.bind(mouse));