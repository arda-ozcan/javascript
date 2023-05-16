let simdi = new Date(); //simdiki tarih-saat bilgisi


//get metitları
sonuc = simdi;
sonuc = simdi.getDate(); //gün bilgisi
sonuc = simdi.getDay();  //hangi gün olduğu mesela 2 = Salı
sonuc = simdi.getFullYear(); // yıl bilgisi
sonuc = simdi.getHours(); //saat bilgisi
sonuc = simdi.getTime(); //su anki saat bilgisini ms olarak

//set metotları --tarih güncelleme metotları
simdi.setFullYear(2025);
simdi.setMonth(7); // 0:Ocak 1:Subat
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear(); //yılları birbirinden çıkararak yaş bulunabilir
sonuc = simdi - dogumTarihi;
let ms = simdi - dogumTarihi;
let saniye = ms / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;
let hafta = gun / 7;
let ay = hafta / 4;
let yil = ay / 12 ;
sonuc = yil;


console.log(sonuc);
console.log(typeof sonuc);
