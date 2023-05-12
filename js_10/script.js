let ad = "Arda";
let soyad = "Ozcan";
let yas = 21;
let sehir = "Antalya";

// let mesaj = "Benim adim " + ad + " ve soyadım " + soyad + ". " + sehir + "'da yasiyorum. " + "Emeklilige " + (65 - yas) + " yilim kaldi."; 

//ternary op.
let emeklilik = (65 - yas > 0)? "Emeklilige " + (65 - yas) + " yıl kaldi." : "Zaten emekli oldunuz. "
//backtick
mesaj =  `Benim adim  ${ad}  ve soyadım  ${soyad} . ${sehir}'da yasiyorum. ${emeklilik}`; 

console.log(mesaj);