var s = '';
var pola = 10;

for(var i = 1; i <= pola; i++){
    for(var j = pola; j >= i; j--){
        s += '*';
    }

    s += '\n';

}

console.log(s);

//Sumber = Youtube Channel @Mahasiswa Bisa