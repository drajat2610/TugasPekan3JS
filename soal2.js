import dataProduct from './productBin.json' assert { type: 'json' };

let a = dataProduct.data;
let sum = 0;

for (let index in a) {
    console.log("Quantity dari storage ID " + a[index].storageId + " adalah " + a[index].quantity);
    sum += (a[index].quantity);
}

console.log("--------------Totalnya adalah " + sum + "-------------");