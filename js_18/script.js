let user_1 = ["Onur","Arda",21];
let user_2 = ["Emir","Efe",9];

//python-dict, json
let userA = {
    "name":"Onur",
    "lastname":"Arda",
    "yas":21,
    "adres": {
        "sehir": "antalya",
        "ilce": "muratpasa" 
    },
    "hobiler": ["sinema","spor"]
}
let userB = {
    "name":"Emir",
    "lastname":"Efe",
    "yas":9,
    "adres": {
        "sehir": "antalya",
        "ilce": "lara" 
    },
    "hobiler": ["okuma","yuruyus"]
}

let sonuc;

sonuc = userA.name;
sonuc = userA.lastname;
sonuc = userA["yas"];
sonuc = userA.adres.sehir;
sonuc = userA.adres.ilce;
sonuc = userA.hobiler[0];
sonuc = userA.hobiler[1];

let users = [
    userA, 
    userB
];

sonuc = users[1].name;

let urunler = [
    {
        "urun_adi": "samsung a51",
        "urun_fiyat":15000
    },
    {
        "urun_adi": "samsung a32",
        "urun_fiyat":11000
    }
];

sonuc = urunler[0].urun_adi;

console.log(sonuc);
