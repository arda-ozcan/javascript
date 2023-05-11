// let yas = 79;

// if (10 <= yas && yas<= 50)
// {
//     console.log("Yas 10 ile 50 arasındadır.");
// }
// else{
//     console.log("Yas 10 ile 50 arasında değildir.");
// }

// -----------------------------------------------------------------------------------------------

// let sayi = 7;

// if(sayi > 0)
// {
//     if(sayi % 2 == 1)
//     {
//         console.log("Sayı pozitif tek bir sayıdır.");       
//     }
//     else{
//         console.log("Sayı, tek bir sayı değildir.");
//     }
// }
// else{
//     console.log("Sayı pozitif değildir.");
// }

// -----------------------------------------------------------------------------------------------

// let x = 60;
// let y = 45;
// let z = 90;

// if (x > y && x > z){
//     if (y > z){
//         console.log("X > Y > Z");
//     }
//     else {
//         console.log("X > Z > Y");
//     }
// }

// else if (y > x && y > z){
//     if (x > z){
//         console.log("Y > X > Z");
//     }
//     else {
//         console.log("Y > Z > X");
//     }
// }

// else if (z > x && z > y){
//     if (x > y){
//         console.log("Z > X > Y");
//     }
//     else {
//         console.log("Z > Y > X");
//     }
// }

// -----------------------------------------------------------------------------------------------

let vize1 = 70;
let vize2 = 80;
let final = 60;
let sonuc1 = ((vize1 + vize2) / 2) * 0.4;
let sonuc2 = final * 0.6;
let ortalama = (sonuc1 + sonuc2);

console.log(parseInt(ortalama));
if (ortalama >= 50 && final >= 50){
    console.log("Geçti.");
}
else if(ortalama < 50 && final >= 70)
{
    console.log("Geçti.");   
}
else {
    console.log("Kaldı.");
}
