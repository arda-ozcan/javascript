// let urun1 = "iphone12";
// let urun2 = "iphone13";
// let urun3 = "iphone13 Pro";

let urunler = ["iphone12", "iphone13", "iphone13 Pro"];
let fiyatlar = [12000, 15000, 17500];
let renkler = ["gold", "white", "black"];

let urun1 = ["iphone12", 9000, "gold"];

let urun2 = [];
urun2[0] = "iphone 13";
urun2[1] = "12000";
urun2[2] = "black";

let urun3 = [
    "iphone13 Pro",
     17500, 
     ["black" , "green" , "blue"] 
            ];

// urun3[2] = "mavi";
console.log(urun3[2]);            
console.log(urun3[2][0]);            
console.log(urun3[2][1]);            
console.log(urun3[2][2]);            
console.log(typeof urun3[2]);            

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`);
console.log(`${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`);
console.log(`${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`);

let kursAdi = "Komple Web Kursu";
console.log(kursAdi[7]);
console.log(kursAdi.split(" "));
console.log(kursAdi.split(" ")[1]);
