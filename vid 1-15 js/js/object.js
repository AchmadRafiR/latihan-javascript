let object = {
    nama : "Smk Revit",
    telp : 08123456789,
    buah : ["apel","mangga","jeruk"],
    coba : function () {
                return "coba function dalam object";
            },
    boleh : true,
    "tulis aja" : 1000000000,
};

console.log(object.nama);
console.log(object.telp);
console.log(object.boleh);
console.log(object.coba());
console.log(object.buah[1]);
console.log(object["tulis aja"]);