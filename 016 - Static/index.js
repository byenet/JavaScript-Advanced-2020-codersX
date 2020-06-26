//static 

class Foo {
    static someMethod() {
      console.log('some method');
    }

    anotherMethod() {
      console.log('another method');
    }
}

/* khong the goi neu chua tao 1 instance
Foo.anotherMethod(); */
const foo = new Foo(); // instance
foo.anotherMethod();

// khong goi dc foo.someMethod()
// foo.someMethod()

// khi co static thi static thuoc ve class
Foo.someMethod();


// truyen thong
// function Foo(){

// }

// Foo.prototype.anotherMethod = function(){

// }

// Foo.someMethod = function() {

// }
