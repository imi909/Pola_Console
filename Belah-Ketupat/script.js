var s = '';
var pola = 10;

for(var i = 1; i <= pola; i++){
    for(var j = pola; j >= i; j--){
        s += ' ';
    }

    for(var k = 1; k <= i+(i-1); k++){
        s += '*';
    }

    s += '\n';
}

for(var i = 1; i <= pola; i++){
    for(var j = 1; j <= i; j++){
        s += ' ';
    }

    for(var k = pola; k >= (2*i - pola); k--){
        s += '*';
    }

    s += '\n';
}

console.log(s);

//Sumber = Youtube Channel @Mahasiswa Bisa