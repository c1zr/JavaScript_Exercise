let zelenina = ["Celer", "Mrkev", "Rukola", "Dyne", "Okurka", "Salat"];
//console.log(zelenina);


//vypsat hodnotu na indexu 4

//console.log(zelenina[4])

//vypsat vetu tonda ma rad mrkev a celer

console.log(`Tonda ma rad ${zelenina[1]} a ${zelenina[3]}`)

//zmena hodnoty 
zelenina[2] = "Cuketa";
console.log(zelenina);

//vkladani v js .push() clazi na konec pole

zelenina.push("batat");
console.log(zelenina);

//odstraneni posledni polozky .pop()
let posledniHodnota =  zelenina.pop();
console.log(posledniHodnota);

//odstraneni prvni polozky .shift()
let prvniHodnota = zelenina.shift();
console.log(prvniHodnota);

//pridani hodnoty do prvni pozice pomoci .unshift()

zelenina.unshift("brambora");
console.log(zelenina);

//odstranovani hodnot z libivolneho indexu .spilce()
//1) parametr je indec odkud ma odstranovat a druhy je pocet prvku, ktere ma odstranit
// 2) parametr je 0
// 3) parametr je nova hodnota
zelenina.splice(3, 1);

//.splice lze pouzit i pro vkladani do prostred pole
zelenina.splice(2, 0, "lilek");

//delka pole
console.log(zelenina.length);


//delku pouzijeme pro delku pole
for (let i = 0; i < zelenina.length; i++) 
{
    console.log(zelenina[i]);
}

console.log("----------------------------------");
//ES6 foreach
//parametrem metody forEach je vzdy arrow funkce
zelenina.forEach((polozka) => {
    console.log(polozka);
});


/* PHP foreach
foreach ($zelenina as $polozka) {
    echo $polozka;
}
*/
