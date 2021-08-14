function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = 0 - 20
    */

    if (nilai > 80 && nilai <= 100) {
        return console.log("A");
    } else if (nilai > 60 && nilai <= 80) {
        return console.log("B");
    } else if (nilai > 40 && nilai <= 60) {
        return console.log("C");
    } else if (nilai > 20 && nilai <= 40) {
        return console.log("D");
    } else if (nilai >= 0 && nilai <= 20) {
        return console.log("E");
    } else {
        return console.log("Nilai tidak valid")
    }
}

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/

nilaiPeserta(5);
nilaiPeserta(60.5);
nilaiPeserta(39.5);
nilaiPeserta(50);
nilaiPeserta(101);