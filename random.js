console.log(Math.random());
console.log(Math.random() * 25);
console.log(Math.floor(Math.random() * 25)); // 0-24
console.log(Math.ceil(Math.random() * 25)); // 1-25

let barvy = ["ruzova", "cerna", "modra", "bila", "zelena", "fialova", "hneda", "zluta", "cervena", "oranzova"];

let nahodnyIndex = Math.floor(Math.random() * barvy.length);
let nahodnaBarva = barvy[nahodnyIndex];
console.log(nahodnaBarva);

console.log(Math.floor(Math.random() * 8) + 5); // 5-12