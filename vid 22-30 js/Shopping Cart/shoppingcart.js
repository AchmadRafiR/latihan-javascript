let tblmenu = [
    {idmenu:9, idkategori:37, menu:"Bakwan", gambar:"bakwan.jpg", harga:3000},
    {idmenu:10, idkategori:37, menu:"Martabak", gambar:"martabak.jpg", harga:15000},
    {idmenu:11, idkategori:37, menu:"Risoles", gambar:"risoles.jpg", harga:5000},
    {idmenu:12, idkategori:37, menu:"Tahu Isi", gambar:"tahuisi.jpg", harga:3000},
    {idmenu:15, idkategori:35, menu:"Ikan Bakar", gambar:"ikanbakar.jpg", harga:20000},
    {idmenu:16, idkategori:35, menu:"Ikan Goreng", gambar:"ikangoreng.jpg", harga:15000},
    {idmenu:18, idkategori:35, menu:"Ayam Bakar", gambar:"ayambakar.jpg", harga:15000},
    {idmenu:19, idkategori:35, menu:"Ayam Goreng", gambar:"ayamgoreng.jpg", harga:10000},
];

let tampil = tblmenu.map(function (kolom) {
    return `
<div class="produk-content">
    <div class="image">
        <img src="images/${kolom.gambar}" alt="">
    </div>
    <div class="Title">
        <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
        <h2>Rp. ${kolom.harga}</h2>
    </div>

    <div class="beli">
        <button data-idmenu="${kolom.idmenu}">BELI</button>
    </div>
</div>`
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;
// console.log(tampil);


let beli = document.querySelectorAll(".beli > button");

let cart = [];

for (let index = 0; index < beli.length; index++) {
    beli[index].onclick = function () {
        // console.log(beli[index].dataset["idmenu"]);
        // cart.push(beli[index].dataset["idmenu"]);

        tblmenu.filter (function (a) {
            if (a.idmenu == beli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
}
// console.log(cart);