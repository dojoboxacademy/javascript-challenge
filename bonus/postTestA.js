var lemariPerpus = ["buku1", "buku2", "buku3"];
var menu = prompt('silahkan pilih menu, 1) tambah buku, 2) pinjam buku, 3) balik buku, 4) ganti buku', '1-4');
var lagi = false

function tambahkanBuku(){
    var judulBuku = prompt('masukan judul buku yang ingin ditambahkan')
    isiLemari = tambahBuku(judulBuku,lemariPerpus)

}

function pinjamkanBuku(){
    var judulBuku = prompt('masukan judul buku yang ingin dipinjamkan')
    isiLemari = pinjamBuku(judulBuku,lemariPerpus)

}

function balikanBuku(){
    var judulBuku = prompt('masukan judul buku yang ingin dikembalikan')
    isiLemari = balikBuku(judulBuku,lemariPerpus)

}

function gantikanBuku(){
    var judulBukuLama = prompt('masukan judul buku yang akan diganti');
    var judulBukuBaru = prompt('masukan judul buku pengganti');
    isiLemari= gantiBuku(judulBukuLama,judulBukuBaru,lemariPerpus)
}

var tambahBuku = function(judulBuku, lemariPerpus){
		lemariPerpus.push(judulBuku);
		return lemariPerpus;
}


var pinjamBuku = function(judulBuku, lemariPerpus){
		var bla = lemariPerpus.indexOf(judulBuku);
		delete lemariPerpus[bla];
        return lemariPerpus
}


var balikBuku = function(judulBuku, lemariPerpus){

		for (var i = 0; i < lemariPerpus.length; i++) {
			if (lemariPerpus[i] == undefined) {
				lemariPerpus[i] = judulBuku;
				return lemariPerpus;
			} else {}
		}
	}

var gantiBuku = function (judulBukuHapus, judulBuku2, lemariPerpus){
		var bla = lemariPerpus.indexOf(judulBukuHapus);
		delete lemariPerpus[bla];
		for (var i = 0; i < lemariPerpus.length; i++) {
			if (lemariPerpus[i] == undefined) {
				lemariPerpus[i] = judulBuku2;
				return lemariPerpus;
			} else {}
		}
}


if(menu==='4'){
    //ganti buku
    gantikanBuku()
    document.write(lemariPerpus.join('<br>'))
}else if(menu==='3'){
    //balik buku
    balikanBuku()
    document.write(lemariPerpus.join('<br>'))

}else if(menu==='2'){
    //pinjam buku
    pinjamkanBuku()
    document.write(lemariPerpus.join('<br>'))
}else if(menu=== '1'){
    //tambah buku
    tambahkanBuku()
    document.write(lemariPerpus.join('<br>'))
}else{
    //data salah
    document.write(lemariPerpus.join('<br>'))
    document.write('masukan menu yang sesuai')
}


lagi= confirm('coba lagi?')

while(lagi===true){
    var menu = prompt('silahkan pilih menu, 1) tambah buku, 2) pinjam buku, 3) balik buku, 4) ganti buku', '1-4');

    if(menu==='4'){
        //ganti buku
        gantikanBuku()
        document.write(lemariPerpus.join('<br>'))
        var lagi= confirm('coba lagi?')
    }else if(menu==='3'){
        balikanBuku()
        document.write(lemariPerpus.join('<br>'))
        var lagi= confirm('coba lagi?')
        //balik buku
    }else if(menu==='2'){
        pinjamkanBuku()
        document.write(lemariPerpus.join('<br>'))
        var lagi= confirm('coba lagi?')
        //pinjam buku
    }else if(menu=== '1'){
        //tambah buku
        tambahkanBuku()
        document.write(lemariPerpus.join('<br>'))
        var lagi= confirm('coba lagi?')
    }else{
        document.write(lemariPerpus.join('<br>'))
        document.write('Masukan menu yang sesuai')
        //data salah
    }
}