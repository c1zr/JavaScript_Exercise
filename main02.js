//var/const/let
/*
//verze JS ES6
//slovo let a const, pouzivame jen pri vytvoreni promenne
const rokNarozeni = 1992;
let krestniJmeno = "Tony";

console.log(rokNarozeni);
console.log(krestniJmeno);

//const uz nelze zmenit, pokud se o to pokusime tak to vyhodi chybu
//rokNarozeni = 1990;

//let zmenit muzeme
krestniJmeno = "Antonio";

console.log(rokNarozeni);
console.log(krestniJmeno);

//promenne uz nelze znovu nadeifnovat
//toto nefuguje vyhodi chybu
/*
const rokNarozeni = 1020;
let krestniJmeno= "Jack";
*/

/*let tonyhoNotebook;
console.log(tonyhoNotebook);


//score++ vs ++score
let score = 0;
console.log(score); //0
score++;
score++;
score++;
score++;
console.log(score); //4
++score;
++score;
console.log(score); //6
//console.log(`Vase score je:${score++}`);
console.log("Vase score je:"+ score++); //6
console.log("Vase score je:"+ ++score); 


console.log("Ahoj, ja jsem " + krestniJmeno);
console.log(43 + 32); //75
console.log(43 + "32"); //"4332"
console.log(4 + 5 + 2); //11
console.log(4 + 5 + "2"); //"92"
console.log(4 + "5" + 2); //"452"
console.log("4" + 5 + 2); //"452"
console.log("4" + (5 + 2)); //"47"

//ES6
console.log(43 + +("32")); //75
//ES5
console.log(43 + parseInt("32")); //75
console.log(43 + Number("32")); //75
console.log(43 + parseFloat("32")); //75
console.log(43 + Math.floor("32")); //75
console.log(43 + ("32" * 1)); //75

//dialogove okno kam muze uzivatel neco napsat
//propmt vzdy vraci STRING!!!
let uzivatelovoOblibeneCislo = prompt("Zadej sve oblibene cislo");
console.log(uzivatelovoOblibeneCislo);   

//ukol npast program ktery se 2x zepta uzivatele na nejake cislo
//potom mu vypiste jejich soucin
*/
/*
let cislo1 = +(prompt(`tve oblibene cislo`))
let cislo2 = +(prompt(`tve oblibene cislo`))
alert(cislo1 + cislo2)

//SCOPE promenne
//promenna existuje pouze v ramci { }
let vek = 29;
if (5 > 3) {
    let letadlo = 2342;
    console.log(vek);
    if (5==5) {
        let vrtulnik = 117;
        console.log(letadlo)
        console.log(vrtulnik)
    }

    //toto je spatne protoze vrtulnik tady venkunuz neexistuje
    console.log(vrtulnik);
}



*/
