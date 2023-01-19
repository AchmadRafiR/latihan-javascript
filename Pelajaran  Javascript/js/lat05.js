function kali(a,b) {
    return a * b;
}
console.log(kali(3,5));

let perkalian = (a,b) => a * b;
console.log(perkalian(4,2))

let zodiak = (tgl,bln) => {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
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
    }else{
        hasil = ("Zodiak Tidak Ada");
    }
    return hasil;
};
console.log(zodiak(1,1));


let lulus = (nilai) => {
    let ket = "Nilai tidak valid";

    if (nilai > 0 && nilai <= 100) {
        ket = "TIDAK LULUS"
        if (nilai > 70) {
            ket = "LULUS"
        }
    }
    return ket;
}
console.log(lulus(60));


let terbilang = (angka) => {
    var bilne=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
		if(angka < 12){
			return bilne[angka];
		}else if(angka < 20){
			return terbilang(angka-10)+" belas";
		}else if(angka < 100){
			return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);
		}else if(angka < 200){
			return "seratus "+terbilang(parseInt(angka)-100);
		}else if(angka < 1000){
			return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);
		}else if(angka < 2000){
			return "seribu "+terbilang(parseInt(angka)-1000);
		}else if(angka < 1000000){
			return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);
		}else if(angka < 1000000000){
			return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);
		}else if(angka < 1000000000000){
			return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyar "+terbilang(parseInt(angka)%1000000000);
		}else if(angka < 1000000000000000){
			return terbilang(Math.floor(parseInt(angka)/1000000000000))+" trilyun "+terbilang(parseInt(angka)%1000000000000);
		}
        return bilne;
}
console.log(terbilang(2023));


let prima = (angka) => {
    let keterangan = "nilai tidak valid";
    if (angka > 0) {
        
        let pembagi = 0;
        for (let index = 0; index <= angka; index++) {
            if (angka % index == 0) {
                pembagi++;
            }
        }
        keterangan = "Bukan Prima";
        if (pembagi == 2) {
            keterangan = "Prima";
        } 
    }
    return keterangan;
}
console.log(prima(21));
