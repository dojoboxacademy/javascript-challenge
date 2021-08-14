var data = ['Jojo', 'Valen', 'Vista', 'Adib', 'Andika'];

var input = prompt('Masukkan nama');

if (data.indexOf(input) == -1) {
    document.write('Tidak boleh masuk!');
} else {
    document.write('Boleh masuk!');
}