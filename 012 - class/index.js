// constructor function
function Mouse(name){
  this.name = name;
}

Mouse.prototype.run = function(){
  console.log(`${this.name} is running`);
}

// Dung class
class Mouse2 {
  constructor(name){
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running`);
  }
}

const mouse = new Mouse2('Mickey');
mouse.run();