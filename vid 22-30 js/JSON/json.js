document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
    // console.log("tes")
    let url = "tblmenu.json"
    fetch(url)
    .then(function (res) {
        return res.json(); 
    })
    .then(function (data) {
        let output = "<h1>DATA MENU</h1> <table> <th>Menu</th> <th>Harga</th> <th>Warna</th>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
                </tr>`;
        }); 
        output += "</table>";
        document.querySelector("#isi").innerHTML = output;

    })

}



// let tblmenu = [ 
//     {
//         "idmenu" : 9,
//         "idkategori" : 37,
//         "menu" : "Bakwan",
//         "harga" : 3000,
//         "warna" : ["merah", "kuning", "hijau"],
//         "stok" : true,
//         "keterangan" : null
//     },
//     {
//         "idmenu" : 10,
//         "idkategori" : 37,
//         "menu" : "Martabak",
//         "harga" : 15000,
//         "warna" : ["pink", "ungu", "hitam"],
//         "stok" : false,
//         "keterangan" : null
//     }
// ]

// console.log(tblmenu[0].menu);