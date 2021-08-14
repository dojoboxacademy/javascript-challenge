/*

Berapa berat badan ideal Anda?

Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]

nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.

Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 

*/

var inputTinggi = parseInt(prompt('Masukkan tinggi (sentimeter)'));

function beratBadanPria(tinggi) {
    var beratIdealPria = (tinggi - 100) - ((tinggi - 100) * 0.1);
    return beratIdealPria;
}

function beratBadanWanita(tinggi) {
    var beratIdealWanita = (tinggi - 100) - ((tinggi - 100) * 0.15);
    return beratIdealWanita;
}

document.write('Berat badan ideal pria untuk tinggi ', inputTinggi, ' sentimeter adalah ', beratBadanPria(inputTinggi), ' kilogram', '<br>');
document.write('Berat badan ideal wanita untuk tinggi ', inputTinggi, ' sentimeter adalah ', beratBadanWanita(inputTinggi), ' kilogram', '<br>');