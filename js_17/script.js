let meyve = ["elma", "armut", "muz", "çilek"];

// sonuc = meyve.length;
sonuc = meyve.toString();
sonuc = meyve.join("-");
// sonuc = meyve.shift(); //ilk elemanı döndürür
// sonuc = meyve.pop();   //son elemanı döndürür

// console.log(meyve.includes("elma"));

sonuc = meyve.push("kiraz");
sonuc = meyve.splice(3,2); //3. indeksten başladı 2 tanesini sildi

let ogr1 = ["Yigit","Bilgi",2010, 70, 60, 80];
let ogr2 = ["Ada","Bilgi",2012, 80, 80, 90];
let ogr3 = ["John","John",2009, 60, 60, 70];

let simdi = new Date();
let yas1 = simdi.getFullYear() - ogr1[2];
let yas2 = simdi.getFullYear() - ogr2[2];
let yas3 = simdi.getFullYear() - ogr3[2];
let ort1 = (ogr1[3] + ogr1[4] + ogr1[5]) / 3; 
let ort2 = (ogr2[3] + ogr2[4] + ogr2[5]) / 3; 
let ort3 = (ogr3[3] + ogr3[4] + ogr3[5]) / 3; 

console.log("Ogr1'in yasi= " + yas1 + " ve ortalaması= " + ort1.toFixed(2));
console.log("Ogr2'in yasi= " + yas2 + " ve ortalaması= " + ort2.toFixed(2));
console.log("Ogr3'un yasi= " + yas3 + " ve ortalaması= " + ort3.toFixed(2));