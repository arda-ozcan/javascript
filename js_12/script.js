let url = "http://ardaozcan.cf/";
let kursAdi = "Komple Web Geliştirme Kursu";

sonuc = url.length; //url kaç karakterli

sonuc = kursAdi.split(" ").length; //kursAdi kaç kelimeden oluşuyor
sonuc = url.startsWith("https"); // url 'https' ile mi başlıyor
sonuc = kursAdi.includes("Egitimi"); // kursAdi 'Egitimi' içeriyor mu

// Bir web sitesinde <h>'ı link haline getirme işlemleri:
kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
kursAdi = kursAdi.replaceAll("ş","s").replaceAll("ı","i");
// sonuc = url.concat(" ",kursAdi.trimStart());
sonuc = `${url}/${kursAdi}`;
 

console.log(sonuc);
