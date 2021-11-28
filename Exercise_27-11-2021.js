let firstName = "Jan";
let secondName = "Ciz";
let job = "Myval";

console.log("Ahoj, jmenuji se " + firstName + " a pracuji jako " +job)

///////////////////////

let age = 27;

console.log("Jmenuji se " + firstName + " a je mi " + age)


console.log("Za pet let mi bude " + (age + 5))

/////////////////
let maxPoints = 100

let student1 = 45
let student2 = 70

let student1Name = "Harry"
let student2Name = "Hermiona"


let result1 = (student1 / maxPoints) * 100
let result2 = (student2 / maxPoints) * 100

console.log(student1Name + " Dosahl " + result1 + " % uspesnosti")
console.log(student2Name + " Dosahla " + result2 + " % uspesnosti")

////////////////////



let age = 21

let child = age < 18
let adult = age >= 18
let pensioner = age >= 65

console.log("dite " + child)
console.log("Dospely " + adult)
console.log("senior " + pensioner)


let age = 15

if(age >= 18)
{
    console.log("Jsi dospely")
}
else
{
    console.log("Nejsi dospely")
}


//////////////


let firstName = "Martin"

if(firstName === "David")
{
    console.log("DObry den Davide, muzete jit dal")
}
else if(firstName === "Martin")
{
    console.log("Dobry den Martine, muzete jit dal")
}
else if(firstName === "Jana")
{
    console.log("Dobry den, muzete vstoupit")
}
else{
    console.log("Vyskunci")
}



let pozice = "sekretar"

if(pozice === "programator")
{
    console.log("Jaky je rozdil mezi html, CSS a JavaScriptem?")
}
else if(pozice === "administrator")
{
    console.log("Jake znate druhy siti")
}
else if(pozice === "sekretarka" || pozice === "sekretar")
{
    console.log("Jake znate funkce v Excelu?")
}
else{
    console.log("Vyberte moznost")
}


let teplota = 26

if(teplota <= 10)
{
    console.log("chladno")
}
else if(teplota >= 11 && teplota < 26)
{
    console.log("teplo")
}
else{
    console.log("horko")
}


/////////////////


let weight = 10
let height = 19

if(weight >= 100 || height >= 190)
{
    console.log("Podezdrely")
}
else
{
    console.log("Neproverovat")
}


 let naDruhou = function(num)
 {
     console.log(num * num)
 }


 let naDruhou = (num) => console.log(num * num)
 
naDruhou(5)



 let zdraviciFunkce = function(name)
 {  
    console.log("Ahoj ja jsem " + name)
 }

 zdraviciFunkce("Jan")


 let zdraviciFunkce = (name) => console.log("Ahoj ja jsem " + name)
 

 zdraviciFunkce("psicek")

 

 let naDruhou = function(number)
{
    let result = number * number
    return result
}

let value1 = naDruhou(9)
console.log(value1)


let adultChecker = function(vek)
{
    if(vek >= 18)
    {
        console.log("Dospely")
    }
    else if(vek < 18)
    {
        console.log("Dite")
    }

    if(vek === 18 || vek > 18)
    {
        console.log("Vstupte")
    }
    else{
        console.log("Nemuzete vstoupit")
    }
}

adultChecker(25)



let adultChecker = function(age)
{
    if(age >= 18)
    {
        let result = "dospely"
        return result
    }
    else
    {
        let result = "dite"
        return result
    }
}

let value = adultChecker(15)


if(value === "dospely")
{
    console.log("Vysledek kontroly velku: " + value)
    console.log("Muzes vstoupit")
}
else{
    console.log("Vysledek  kontroly veku: " + value)
    console.log("Nemuzes vstoupit")   
}