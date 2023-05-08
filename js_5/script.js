//Uygulama
var isim_ogr1 = "Ada Bilgi";
var isim_ogr2 = "Yigit Bilgi";

let dogum_ogr1 = 2012;
let dogum_ogr2 = 2010;

// let  mecvutYil = new Date().getFullYear;
let  mecvutYil = 2023;
let yas_ogr1 = mecvutYil - dogum_ogr1;
let yas_ogr2 = mecvutYil - dogum_ogr2;

let not1_ogr1 = 70;
let not2_ogr1 = 70;
let not3_ogr1 = 80;
let not1_ogr2 = 40;
let not2_ogr2 = 40;
let not3_ogr2 = 50;

let ortalamaNotu_ogr1 = ((not1_ogr1 + not2_ogr1 + not3_ogr1) / 3);
let ortalamaNotu_ogr2 = ((not1_ogr2 + not2_ogr2 + not3_ogr2) / 3);
let basarilimi_ogr1 = (ortalamaNotu_ogr1 >=50);
let basarilimi_ogr2 = (ortalamaNotu_ogr2 >=50);

console.log(isim_ogr1 + " " + yas_ogr1 + " " + basarilimi_ogr1 + " " + "ortalaması:" + parseInt(ortalamaNotu_ogr1));
console.log(isim_ogr2 + " " + yas_ogr2 + " " + basarilimi_ogr2 + " " + "ortalaması:" + ortalamaNotu_ogr2);
