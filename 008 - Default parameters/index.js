// Default parameters


// Thu cong
function greeting(name) {
    if(name === undefined){
        name = 'friend';
    }
    return `Hi, ${name}`
}

console.log(greeting());


// Dung defaut parameters
function greeting2(name = 'friend2') {
    return `Hi, ${name}`;
}

console.log(greeting2());
console.log(greeting2('huy2'));


// phuc tap hon

function greeting3(name = 'friend', language = 'ja'){
    if(language === 'en'){
        return `Hi, ${name}`;
    }

    if (language === "ja") {
      return `Konichiwa, ${name}`;
    }

    return 'Chao ban';
}

console.log(greeting3());

