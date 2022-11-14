const prompt = require('prompt-sync')({sigint: true});

let x = prompt('Silahkan inputkan angka: ');
let evenNumber = (x%2 == 0);
let oddNumber = (x%2 == 1);

if(evenNumber == true && oddNumber == false){
    console.log("Akar pangkat 2 dari " + x + " adalah " + Math.sqrt(x));
} else if(evenNumber == false && oddNumber == true){
    console.log("Tidak bisa input bilangan ganjil !!!");
} else {
    console.log("Tidak bisa input bilangan negatif !!!");
}