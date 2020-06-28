// closure

function  sum(a,b) {
    const c = a+b;
    console.log(c);
    return c;
}

// khi goi ham ket thuc thi tat ca bien ben trong ham duoc khai bao se khong duoc dung nua bi huy va xoa ra khoi bo nho (trong js co 1 thang la gc(garbage collector) thnag nay se check xem bien nao khong duoc dung nua thi no se check xem nhung bien nao khong duoc dung nua no se bor ra khoi bo nho) 
sum(1,2);


// trong javascript tra ve 1 ham duoc: 
function  sum2(a,b) {
    const c = a+b;
    return function(){
        console.log(c);
        // trong day ta co tham chieu den 1 bien o ben ngoai bien nay nam trong scope cua ham chua no => tao ra 1 closure nghia la ham nay co the truy cap vao 1 bien ben ngoai ham chua no (dang le c phai duoc giai phong va thang nay khong duoc truy cap vao nhung ma day la 1 tinh nang trong js do la van co the truy cap duoc vao theo kieu do)
    }
}

// de goi duoc ham ben trong ta phai execute no:
sum2(2,3)();
// => cac ham con co the truy cap duoc vao cac bien ben ngoai co the thay doi duoc gia tri cua cac bien

// VD tao ra 1 ham debug

function debug(name){
    return function(str){
        console.log(`[${name}] ${str}`);
    }
}

const log = debug('Mouse')
// bien name = Mouse van duoc dung trong ham trong khi ta dung ham log() cung tuong tu nhu debug('Mouse')('error happens')
log('error happens');
