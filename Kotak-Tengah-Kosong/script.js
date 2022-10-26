var s = '';
var panjang = 10;
var lebar = 5;

for(var i = 1; i <= lebar; i++){
    if( i == 1 || i == lebar){
        for(var j = 1; j <= panjang; j++){
            s += '#';
        }
    } else {
        for(var k = 1; k <= panjang; k++){
            if(k == 1 || k == panjang){
                s += '#';
            } else {
                s += ' ';
            }
        }
    }

    s += '\n';

}

console.log(s);

//Sumber = Youtube Channel @Mahasiswa Bisa