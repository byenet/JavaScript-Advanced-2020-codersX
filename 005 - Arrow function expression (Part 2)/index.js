// arrow function expression 
// fat arrow 

var a = {
    name: 'AAA',
    run: function() {
        var run2 = function() {
            console.log(this.name);
        }
        run2.bind(a)();
    }
};

a.run();

var b = {
  name: "BBB",
  run: function () {
    var run2 = function () {
      console.log(this.name);
    }.bind(b)
    run2();
  },
};

b.run();

var c = {
  name: "CCC",
  run: function () {
    // neu goi this o day thi la context cua c
    var run2 = function () {
      console.log(this.name);
    }.bind(this);
    run2();
  },
};

c.run();

var d = {
  name: "DDD",
  run: function () {
    // neu goi this o day thi la context cua c
    var that = this
    var run2 = function () {
      console.log(that.name);
    };
    run2();
  },
};

d.run();



// arrow function khong co context nen bien this se la context cua ham gan nhat

var e = {
  name: "EEE",
  run: function () {
    var run2 = () => {
      console.log(this.name);
    };
    run2();
  },
};

e.run();


// VD hay bi hoi khi phong van

var f = {
    foo: 'bar1',
    run: function(){
        setTimeout(function () {
            console.log(this.foo);
        },2000);
    }
}

f.run();

var g = {
  foo: "bar2",
  run: function () {
    setTimeout(function () {
      console.log(this.foo);
    }.bind(this), 2000);
  },
};

g.run();


var h = {
  foo: "bar3",
  run: function () {
    setTimeout(
      function () {
        console.log(this.foo);
      }.bind(h),
      2000
    );
  },
};

h.run();


var i = {
  foo: "bar4",
  run: function () {
    var that = this;
    setTimeout(
      function () {
        console.log(that.foo);
      },
      2000
    );
  },
};

i.run();


var j = {
  foo: "bar5",
  run: function () {
    setTimeout( () => {
      console.log(this.foo);
    }, 2000);
  },
};

j.run();