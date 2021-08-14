/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/



//Operation
//Input dan output

//fungsi menghitung luas dengan menggunakan function declaration

//boleh tidak memiliki nilai balik


//tidak menggunakan nilai balik
//segi empat (sisi * sisi)


function hitungLuasSegiEmpat(sisi){
    //tidak ada nilai balik
    var luas = sisi * sisi
    return luas

}


//persegi panjang (panjang * lebar)
function hitungLuasPersegiPanjang(panjang,lebar){
    //tidak memiliki nilai balik
    var luas = panjang * lebar
    return luas
}

//menggunkan nilai balik
//segi tiga (0.5 * alas * tinggi)
function hitungLuasSegiTiga(alas,tinggi){
    var luas = 0.5 * alas * tinggi 
    return luas;
}


//lingkaran (3.14 * jari-jari ^ 2)
function hitungLuasLingkaran(jariJari){
    return 3.14 * jariJari ^ 2
}
//fungsi menghitung keliling dengan menggunakan function expression

//segi empat (sisi + sisi + sisi + sisi)
var hitungKelilingSegiEmpat = function(sisi){
    // return sisi + sisi + sisi;
    return sisi * 4;
}
//segi panjang (2* (panjang + lebar))
var hitungKelilingPersegiPanjang = function(panjang,lebar){
    return 2 * (panjang +  lebar);
}

//segi tiga  ( alas + tinggi + sisi miring)
var hitungKelilingSegiTiga = function(alas,tinggi, sisiMiring){
    return alas + tinggi + sisiMiring;
}

//lingkaran (2 * 3.14 * jari-jari)
var hitungKelilingLingkaran = function(jariJari){
    return 2 * 3.14 * jariJari
}


//input outputnya

//luas
//persegi (1 variable)
function luasPersegi(){
    var panjangSisi = parseInt(prompt('Masukan sisi persegi : '));
    var luas = hitungLuasSegiEmpat(panjangSisi);

    document.write('Luas Persegi dengan sisi ' + panjangSisi + 'adalah : ' + luas);
}
//persegi panjang (2 variable)

function luasSegiPanjang(){
    var panjang = parseInt(prompt('Masukan panjang : '));
    var lebar = parseInt(prompt('Masukan Lebar : '));
    var luas = hitungLuasPersegiPanjang(panjang,lebar);

    document.write('Luas persegi panjang dengan panjang ' + panjang + 'dan lebar ' + lebar + '  adalah : ' + luas);
}

//segitiga (2 variable)

function luasSegitiga(){
    var alas = parseInt(prompt('Masukan alas : '));
    var tinggi =parseInt(prompt('Masukan tinggi : '));
    var luas = hitungLuasSegiTiga(alas,tinggi);

    document.write('Luas segitiga dengan alas ' + alas + 'dan tinggi ' + tinggi + '  adalah : ' + luas);
}
//lingkaran (1 variable)

function luasLingkaran(){
    var jariJari =  parseInt(prompt('Masukan alas : '));
    var luas = hitungLuasLingkaran(jariJari)

    document.write('Luas lingkaran dengan jari-jari  ' + jariJari + '  adalah : ' + luas);
}
//keliling
//persegi (1 variable)
function kelilingPersegi(){
    var panjangSisi = parseInt(prompt('Masukan sisi persegi : '));
    var Keliling = hitungKelilingSegiEmpat(panjangSisi);

    document.write('Kelining Persegi dengan sisi ' + panjangSisi + 'adalah : ' + Keliling);
}
//persegi panjang (2 variable)

function kelilingPersegiPanjang(){
    var panjang = parseInt(prompt('Masukan panjang : '));
    var lebar = parseInt(prompt('Masukan Lebar : '));
    var keliling = hitungKelilingPersegiPanjang(panjang,lebar)

    document.write('Keliling persegi panjang dengan panjang ' + panjang + 'dan lebar ' + lebar + '  adalah : ' + keliling);
}
//segitiga (3 variable)
function kelilingSegitiga(){
    var alas = parseInt(prompt('Masukan alas : '));
    var tinggi = parseInt(prompt('Masukan tinggi : '));
    var sisiMiring = parseInt(prompt('Masukan sisi miring : '));
    var keliling= hitungKelilingSegiTiga(alas,tinggi,sisiMiring)

    document.write('Luas segitiga dengan alas ' + alas + ', tinggi ' + tinggi +' dan sisi miring ' + sisiMiring + '  adalah : ' + keliling);

}
//lingkaran (1 variable)
function kelilingLingkaran(){
    var jariJari =  parseInt(prompt('Masukan alas : '));
    var keliling = hitungKelilingLingkaran(jariJari)

    document.write('Keliling lingkaran dengan jari-jari  ' + jariJari + '  adalah : ' + keliling);
}

//Menu
var menu = prompt('silahkan pilih menu yang tersedia','1 - Luas , 2 - Keliling')

if(menu==1){
    //mengoperasikan menu luas
    alert('Anda telah memilih menu Luas Bangun Datar');
    var menuLuas = prompt('Masukan bangun datar yang akan dihitung luasnya','1 - Persegi ; 2- Persegi Panjang; 3- Segitiga; 4- Lingkaran')

    if(menuLuas==1){
        //luas Persegi
        luasPersegi();

    }else if(menuLuas==2){
        //luas Persegi Panjang
        luasSegiPanjang()

    }else if(menuLuas==3){
        //Luas Segitiga
        luasSegitiga()

    }else if(menuLuas==4){
        //luas Lingkaran
        luasLingkaran()

    }



}else if(menu == 2){
    //mengoperasikan Keliling
    alert('Anda telah memilih menu Keliling Bangun Datar');
    var menuKeliling = prompt('Masukan bangun datar yang akan dihitung Kelilingnya','1 - Persegi ; 2- Persegi Panjang; 3- Segitiga; 4- Lingkaran')

    if(menuKeliling==1){
        //Keliling Persegi
        kelilingPersegi()

    }else if(menuKeliling==2){
        //Keliling Persegi Panjang
        kelilingPersegiPanjang()

    }else if(menuKeliling==3){
        //Keliling Segitiga
        kelilingSegitiga()

    }else if(menuKeliling==4){
        //Keliling Lingkaran
        kelilingLingkaran()

    }


}else{
    document.write('Menu yang anda pilih tidak valid' + '<br>')
}


