var mesice = ["Leden", "Unor", "Brezen", "Duben", "Kveten", "Cerven"];
alert(mesice[1])

mesice.push("Cervenec");
mesice.push("Srpen");
console.log(mesice);


mesice.splice(0, 2);
console.log(mesice);

for(var i = 0; i < mesice.length; i++)
{
    console.log(mesice[i]);
}


var pocetObyvatel = {
    "Praha" : 1000000,
    "Brno"  : 123
};

pocetObyvatel.Praha = 8;
pocetObyvatel["Praha"] = 9;


console.log(pocetObyvatel);
console.log(`Pocet obyvatel v Praze je ${pocetObyvatel.Praha}`);

for(var mesto in pocetObyvatel)
{
    console.log(`${mesto} : ${pocetObyvatel[mesto]}`);
}



   

console.log(Math.floor(Math.random() * 500));




let number1 = Math.ceil(Math.random() * 6)
let number2 = Math.ceil(Math.random() * 6)
let number3 = Math.ceil(Math.random() * 6)
let number4 = Math.ceil(Math.random() * 6)
let number5 = Math.ceil(Math.random() * 6)
let number6 = Math.ceil(Math.random() * 6)

let sum = number1 + number2 + number3 + number4 + number5 + number6

console.log(sum)

if(sum >=25)
{
    console.log(`Vytez`)
}
else
{
    console.log(`Zkus to znovu`)
}



let zamestnanci = ["David", "Martin", "Jana", "Robert", "Petr"]

console.log(zamestnanci[0])
console.log(zamestnanci[1])
console.log(zamestnanci[2])
console.log(zamestnanci[3])
console.log(zamestnanci[4])

let data = ["Anna", 12, true, false, 13.5]
console.log(data[2])

//delka pole
console.log(zamestnanci.length)
console.log(data.length)

console.log(data[data.length-1])


let passwords = ["2345678DFGHJ", "FGHJ8765", "dfghjk8765", "FGHJKiuztč5678"]  //definuje hesla
let randomNumber = Math.floor(Math.random() * passwords.length) //vytvari promenou kde zaokrouhluje dolu 
console.log(passwords[randomNumber]) 


let heslo = ["ss", "de", "xx"]

let randomNumber = Math.ceil(Math.random() * 3)


let index = heslo.length - randomNumber

console.log(heslo[index])



