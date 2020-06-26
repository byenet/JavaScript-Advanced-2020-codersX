// call: func.call(this, param1, param2,...);

function greeting(name, age) {
    console.log(`Hi! ${name}, I am ${age}`);
}

// tham so thu nhat la this, tu tham so thu hai tro di la tham so cua ham
greeting.call(null, 'Tom', 10);


function greeting2() {
  console.log(`Hi! ${this.name}, I am ${this.age}`);
}

var cat = {
    name: 'Tom2', 
    age: '12'
};

greeting2.call(cat);

// khac voi bind la bind tra ve 1 ham va phai goi ham thi ham moi chay
// con call thi goi ham do va no tra ve gia tri ma ham tra ve