function selamlama(mesage) {
    console.log(mesage);
}

selamlama("salam");
selamlama("merhaba");
selamlama("iyi günler");

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasArda = yasHesapla(1985);
let yasEmir = yasHesapla(1987);

console.log(yasArda, yasEmir);

function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;

    if (kalan_sene > 0) {
        console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1980, "Arda");
emekliligeKacYilKaldi(1950, "Emir");