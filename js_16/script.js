let ogrenciler = ["onur","Arda","Emir","Efe"];

let sonuc = ogrenciler.length;

//array to string methods
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" "); //her bir eleman boşluk gelecek şekilde birleştirilir

//delete element
// sonuc = ogrenciler.pop(); //son eleman silinir ve bunu geri çevirir
// sonuc = ogrenciler.shift();  //ilk eleman silinir ve bunu geri çevirir

//add element
// sonuc = ogrenciler.push("dany"); //dizinin sonuna eleman eklenir
// sonuc = ogrenciler.unshift("dany") //listenin ilk elemanı olur

let markalar1 = ["mazda","bmw","audi","mercedes"];
let markalar2 = ["togg", "devrim"];
let markalar3 = ["opel"];

// sonuc = markalar1.concat(markalar2, markalar3);     //DİZİ BİRLEŞTİRME
// sonuc = markalar1.splice(0, 0, markalar2); //0.indeksten başla, 0 eleman sil, markalar2'i ekle 
// sonuc = markalar1.splice(0, 1, "togg", "devrim");
sonuc = markalar1.splice(0, 1);


console.log(sonuc); 
console.log(markalar1);