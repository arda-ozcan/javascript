let kursAdi = "Komple Uygulamali Web Gelistirme Egitimi";

let sonuc;

sonuc = kursAdi.toLowerCase(); //küçük harfe çevirir
sonuc = kursAdi.toUpperCase; // büyük harfe çevirir
sonuc = kursAdi.length;
sonuc = kursAdi[5]; //index
sonuc = kursAdi.slice(0, 7);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Egitimi", "Kursu");
sonuc = kursAdi.trim(); //sag-soldaki bütün boşlukları siler
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple"); //hangi indexten sonra oldugu oldugu bilgisi
sonuc = kursAdi.split(" "); //dizi olarak getirir
sonuc = kursAdi.split(" ")[3]; //dizideki 3.indexi  olarak getirir


console.log(sonuc);