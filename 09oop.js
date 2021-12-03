//ES6
class Clovek {
    //protected, public a private vlasntosti v JS neexistuji
    //vsechno je public

    constructor (argJmeno, argRokNarozeni, argBarvaVlasu) {
        //this jsou vlastnosti tridy
        //pezmeme argumenty a prirdime je urcitym vlastnotem
        this.jmeno = argJmeno;
        this.rokNarozeni = argRokNarozeni;
        this.barvaVlasu = argBarvaVlasu;
        //muzeme vytvorit vlasztno bez argumentu
        this.jeZivy = true;
    }

    //metodu uvnitr tridy definujeme bez slovicka function
    obarviSe (argNovaBarvaVlasu) {
        this.barvaVlasu = argNovaBarvaVlasu;
    }

    //tato metoda zmeni true na false
    umri () {
        this.jeZivy = false;
    }
}

//vytvarime instance konkretnich lidi ze tridy Clovek
let clovek1 = new Clovek("Tonda", 1992, "cerna");
let clovek2 = new Clovek("Pepa", 1982, "");


console.log(clovek1);
console.log(clovek2);

clovek1.obarviSe("blond");

console.log(clovek1);
console.log(clovek2);

//zde umrel Pepa. takze jeho vlasnost this.jeZivy se zmeni na false
clovek2.umri();

console.log(clovek1);
console.log(clovek2);

//protoze v JS jsou vsechny vlastnoti public, tak neni problem Pepu ozivit
clovek2.jeZivy = true;