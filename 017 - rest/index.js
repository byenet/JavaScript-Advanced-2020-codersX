// ...rest parameter
function log(a){
    console.log(a);    
}

// log nhu vay thi dc
log(1);

// log nhieu thi chi log ra duoc so dau tien
log(2,3,4);

function log2(...numders) {
    console.log(numders);
}

log2(1,2,3,4)

function log3(a,...numders) {
    console.log(numders);
    console.log(arguments);
    
}

log3(1,2,3,4)

//=> rest la phan con lai


// VD

function sum(...nums){
    return nums.reduce((a,b) => {
        return a + b;
    }, 0);
};

console.log(sum(1,2,3,4));

function concat(separator, ...strings){
    return strings.join(separator);
}

console.log(concat('.','a','b','c'));