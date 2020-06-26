// inheritance

// Dung constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log('Eating...');
}

function Bird(name){
  Animal.apply(this,arguments);
}

Bird.prototype = new Animal();
const birdd = new Bird("cut cu");
birdd.eat();



// Dung class
class Animal2 {
  constructor(name) {
    this.name = name;
  }

  eat(){
    console.log('Eating...');
  }
}

class Bird2 extends Animal2 {
  fly(){
    console.log('Flying...');
  }
}

const bird = new Bird2('cut cu');
bird.fly();
bird.eat();


class Parrot extends Bird2{
  speak(){
    console.log('Speaking...');
  }
}

const parrot = new Parrot("vet");
parrot.fly();
parrot.eat();
parrot.speak();