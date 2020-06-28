// higher order functions

// noi 1 cach de hieu 1 ham co the nhan 1 function lam tham so hoac tra ve 1 function thi goi la higher order function

function debug(name){
    return function(str){
        console.log(`[${name}] ${str}`);
    }
}

const log = debug('Mouse')
log('error happens');

// => higher order functions

function waitAndRun(ms, func){
    setTimeout(func, ms);
}

function run(){
    console.log('run');
}

waitAndRun(2000, run);

// => higher order functions

// => co the giup chia nho chuong trinh ra cac ham nho de handel va cac ham nho khi chay xong se giup giai phong bo nho => tang hieu suat