var x = parseInt(prompt('masukan bil pertama'));
var y = parseInt(prompt('masukan bil kedua'));

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.

//versi pakai fungsi
function penjumlahan(x, y) {
    var z = x + y;
    return z;
}

function pengurangan(x, y) {
    var z = x - y;
    return z;
}

function perkalian(x, y) {
    var z = x * y;
    return z;
}

function pembagian(x, y) {
    var z = x / y;
    return z;

}


document.write('hasil penjumlahan kedua bilangan adalah : ' + penjumlahan(x,y) + '<br>');
document.write('hasil pengurangan kedua bilangan adalah : ' + pengurangan(x,y) + '<br>');
document.write('hasil perkalian kedua bilangan adalah : ' + perkalian(x,y) + '<br>');
document.write('hasil pembagian kedua bilangan adalah : ' + pembagian(x,y) + '<br>');