
var barang = ['monitor', 'mouse', 'keyboard'];
var inputBarang = prompt("Inputkan Nama Barang");
var harga = 0; 
var jumlah = 0; 
var total = 0;
var disc1 = 0;
var disc2 = 0;
var valid = false;

cekBarang(inputBarang, barang);
cetakNota();



function cekBarang(namaBarang,barang){
    if (barang.includes(namaBarang)){

    harga = parseInt(prompt('Inputkan Harga'));
    jumlah = parseInt(prompt('Inputkan Jumlah ' + inputBarang + ' yang di Inginkan'));
    disc1 = parseInt(prompt('Inputkan Discount'))
    disc2 = disc1/100;
    total = (harga*jumlah) - (harga*disc2); 
    valid = true
}else{
    document.write("Maaf barang yang anda cari tidak tersedia");
}

}

function cetakNota(){

    if (valid){

        document.write("Nama Barang : " + inputBarang + '<br>');
        document.write("Harga : Rp. " + harga + '<br>');
        document.write("Jumlah : " + jumlah + '<br>');
        document.write("Discount " + disc1 + "% : " + (harga*disc2) + '<br>');
        document.write("Total : Rp. " + total + '<br>');


    }else{
        document.write("Maaf barang yang anda cari tidak tersedia");
    }
}