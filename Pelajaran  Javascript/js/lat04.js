let tampil = document.querySelector("#belajar");
// let tanggal = document.querySelector("#tanggal");
// let bulan = document.querySelector("#bulan");


// klik.addEventListener("click", hasil(5));
// klik.onclick = function (b) {
//     alert(35);
// }


function hasil() {
    // let a = document.getElementsByName("tgl")[0].value;
    // tampil.innerHTML = a;
    // alert(a);
}

// (Bulan , Tanggal)
// zodiak(11,28);
function zodiak() {
    let hasil = "Salah";
    let tanggal = document.getElementById("tanggal").value;
    let bulan = document.getElementById("bulan").value;

    if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 32) {
        hasil = "zodiak belum dibuat";

        if (bulan == 1 && tanggal < 32) {
            hasil = "Capricon";
            if (tanggal > 20) {
                hasil = "Aquarius";
            }
        }

        if (bulan == 2 && tanggal < 30) {
            hasil ="Aquarius";
            if (tanggal > 19 ) {
                hasil = "pisces";
            }
        }

        if (bulan == 3 && tanggal < 32) {
            hasil ="Pisces";
            if (tanggal > 20 ) {
                hasil = "Aries";
            }
        }

        if (bulan == 4 && tanggal < 31) {
            hasil = "Aries"
            if (tanggal > 20 ) {
                hasil = "Taurus";
            }
        }

        if (bulan == 5 && tanggal < 32) {
            hasil = "Taurus"
            if (tanggal > 21 && tanggal < 31) {
                hasil = "Gemini";
            }
        }

        if (bulan == 6 && tanggal < 31) {
            hasil = "Gemini"
            if (tanggal > 20 ) {
                hasil = "Cancer";
            }
        }

        if (bulan == 7 && tanggal < 32) {
            hasil = "Cancer"
            if (tanggal > 23 ) {
                hasil = "Leo";
            }
        }

        if (bulan == 8 && tanggal < 31) {
            hasil = "Leo"
            if (tanggal > 23 ) {
                hasil = "Virgo";
            }
        }

        if (bulan == 9 && tanggal < 32) {
            hasil = "Virgo"
            if (tanggal > 23 ) {
                hasil = "Libra";
            }
        }

        if (bulan == 10 && tanggal < 31) {
            hasil = "Libra"
            if (tanggal > 23 ) {
                hasil = "Scorpio";
            }
        }

        if (bulan == 11 && tanggal < 32) {
            hasil = "Scorpio"
            if (tanggal > 22 ) {
                hasil = "Sagitarius";
            }
        }

        if (bulan == 12 && tanggal < 31) {
            hasil = "Sagitarius"
            if (tanggal > 22 ) {
                hasil = "Capricorn";
            }
        }
        
    }
    console.log(hasil);
    tampil.innerHTML = hasil;
}



// lulus(100);
let oke = document.querySelector("#paragraf");
function lulus() {
    let ket = "Nilai tidak valid";
    let nilai = document.getElementById("nilai").value;

    if (nilai > 0 && nilai <= 100) {
        ket = "TIDAK LULUS"
        if (nilai > 70) {
            ket = "LULUS"
        }
    }
    console.log(ket);
    oke.innerHTML = ket;

}




let tampil3 = document.querySelector("#isi");
function terbilang() {
    let angka = document.getElementById("angka").value;
    function convert(angka){
            var bilne=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
            if(angka < 12){
                return bilne[angka];
            }else if(angka < 20){
                return convert(angka-10)+" belas";
            }else if(angka < 100){
                return convert(Math.floor(parseInt(angka)/10))+" puluh "+convert(parseInt(angka)%10);
            }else if(angka < 200){
                return "seratus "+convert(parseInt(angka)-100);
            }else if(angka < 1000){
                return convert(Math.floor(parseInt(angka)/100))+" ratus "+convert(parseInt(angka)%100);
            }else if(angka < 2000){
                return "seribu "+convert(parseInt(angka)-1000);
            }else if(angka < 1000000){
                return convert(Math.floor(parseInt(angka)/1000))+" ribu "+convert(parseInt(angka)%1000);
            }else if(angka < 1000000000){
                return convert(Math.floor(parseInt(angka)/1000000))+" juta "+convert(parseInt(angka)%1000000);
            }else if(angka < 1000000000000){
                return convert(Math.floor(parseInt(angka)/1000000000))+" milyar "+convert(parseInt(angka)%1000000000);
            }else if(angka < 1000000000000000){
                return convert(Math.floor(parseInt(angka)/1000000000000))+" trilyun "+convert(parseInt(angka)%1000000000000);
            }
        }
    tampil3.innerHTML = convert(angka);

}




// prima(2)

let tampil2 = document.querySelector("#sinau");
function prima() {
    let keterangan = "nilai tidak valid";
    let angka = document.getElementById("angka").value;
    if (angka > 0) {
        
        let pembagi = 0;
        for (let index = 0; index <= angka; index++) {
            if (angka % index == 0) {
                pembagi++;
            }
        }
        keterangan = "BUKAN PRIMA";
        if (pembagi == 2) {
            keterangan = "PRIMA";
        } 
    }
    console.log(keterangan);
    tampil2.innerHTML = keterangan;
}
