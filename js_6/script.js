let sonuc;
let a = 15, b = 25, c = 35;
// 1- Aritmatik Operatörler
sonuc = a + b;
sonuc = b - a;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a;
sonuc = a++;
sonuc = ++a;
sonuc = a--;
sonuc = --a;

// 2- Atama Operatörleri
sonuc = a;
sonuc += a;
sonuc -= a;
sonuc *= a;
sonuc /= a;
sonuc %= a;

// 3- Karşılaştırma Operatörleri
sonuc = (a == b); //boolean sonuç üretir
sonuc = (a != b); //boolean sonuç üretir
sonuc = (1905 === "1905"); //Burada tür kontrolü de yapılır.
sonuc = (a > b);
sonuc = (a < b);
sonuc = (a <= b);
sonuc = (a >= b);

// 4- Mantıksal Operatörleri
// &&(ve), !( değil), ||(veya) 

console.log(sonuc);