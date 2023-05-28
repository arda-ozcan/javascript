var isim = "Arda"; //globel scope içinde değerlendirilir
const adres = "Antalya";

// adres = "İstanbul"; //Yapamayız!!!! Değişken sabit burada.

function yazdir() {
    var isim = "Efe";
    let yas = 20;
    console.log("Function scope: "+ isim,yas);
}

if(1==1){
    let cinsiyet = "Erkek";     
    var isim = "Onur";
    console.log(isim);
}

yazdir();
console.log(isim);
// console.log(cinsiyet);

//fonksiyonlar kendi scope alanlarını oluşturur
//block içerisinde yeni bir scope oluşturmazzz  (let,const)
//yanii block scope oluşturmak istediğimizde let kullanıyoruz