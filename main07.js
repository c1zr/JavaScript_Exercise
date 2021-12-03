let venkovniTeplota = -4.5749;
console.log(venkovniTeplota);
let triDesetinnaMista = venkovniTeplota.toFixed(3);
console.log(triDesetinnaMista);

//cisla samotan nemaji moc metod, vetsina veci je v objektu Math nebo Number
//Number, Math
console.log(Number.isInteger(venkovniTeplota));
console.log(Number.parseFloat("-4.5749"));
console.log(Number.parseInt("-4.5749"));

console.log(Math.PI);
console.log(Math.floor(5.879)); //5
console.log(Math.ceil(3.113)); //4
console.log(Math.round(3.113)); //3
console.log(Math.round(3.613)); //4
console.log(Math.random());