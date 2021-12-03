//funkce ktera bude prijimat 2 paremtery
//1) pismeno
//2) cislo
//vysledkem funkce bude string o dane celce 2. parametru a bude v sobe mit to pismeno
//napr "C", 7 = "CCCCCCC"
//napr "e", 15 = "eeeeeeeeeeeeeee"
function opakovac(argPismeno, argCislo)
{   
    let vyslednyString = "";
    for(let i = 0; i < argCislo; i++) 
    {   vyslednyString += argPismeno;

    }

    return vyslednyString;
}

console.log(opakovac("f", 30))
console.log(opakovac("r", 5))
console.log(opakovac("t", 15))

let neco = opakovac("g", 29);
console.log(neco)