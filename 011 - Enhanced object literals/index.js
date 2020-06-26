// constructor function 
function Mouse(name){
  this.name = name;
}

Mouse.prototype.run = function(){
  console.log(`${this.name} is running`);
}

const mickey = new Mouse('Mickey');
mickey.run();


// object literal
const jerry = {
  name: 'jerry',
  run: function () {
    console.log(`${this.name} is running`);
  }
};

jerry.run();


// enhanced object literals
const name = 'Tom';

const cat = {
  // name: name,
  name,
  run(){
    console.log(`${this.name} is running`);
  }
};

cat.run();