let sonuc;

sonuc =10;
sonuc ="10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10"); //NaN

sonuc = isNaN("a10"); //true
sonuc = isNaN("10"); //false Sayısal değer değil mi sorusu sorulur.

let sayi =15.123456789;
sonuc = sayi.toPrecision(5); //bütün sayı üzerinden 5e kadar olanları yansıtır, yuvarlar.
sonuc = sayi.toFixed(5); // ondalıklı sayı 5 olur, yuvarlar

sonuc = Math.round(2.4); //yuvarlar
sonuc = Math.ceil(2.2);  //yukarıya yuvarlar
sonuc = Math.floor(2.6); //aşağıya yuvarlar
sonuc = Math.sqrt(25);   //karekök alır
sonuc = Math.pow(2,5);   //üs alır
sonuc = Math.abs(-10);   //mutlak değer alır
sonuc = Math.min(4,9,1,2,7);//min verir
sonuc = Math.max(4,9,1,2,7);//max verir
sonuc = Math.random();// 0-1 arasında rastgele sayı üretir
sonuc = Math.floor(Math.random() * 10) + 1;

 

console.log(typeof sonuc);
console.log(sonuc);
