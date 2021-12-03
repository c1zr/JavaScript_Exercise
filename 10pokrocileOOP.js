//dedeni
class Uzivatel {
    constructor (argKrestniJmeno, argPrijmeni, argRokNarozeni, argAdresa) {
        this.krestniJmeno = argKrestniJmeno;
        this.prijmeni = argPrijmeni;
        this.rokNarozeni = argRokNarozeni;
        this.adresa = argAdresa;

        //vygenerujem nahodne heslo a jmeno
        ///
        ///
        ///
    }

    prestehujSe (argNovaAdresa) {
        this.adresa = argNovaAdresa;
    }
}

//slovicko extends rika ze Student bude dedit od Uzivatele
//podedi vsechny vlastnosti a metody
class Student extends Uzivatel {
    constructor (argKrestniJmeno, argPrijmeni, argRokNarozeni, argAdresa, argRocnik, argObor, argZnamky) {
        //super je konstruktor rodice
        //v super je poradi dulezite
        //zavolame contruktor rodice a predame mu data classy student
        super(argKrestniJmeno, argPrijmeni, argRokNarozeni, argAdresa);

        this.rocnik = argRocnik;
        this.obor = argObor;
        this.znamky = argZnamky;
    }
}

let student1 = new Student("Tony", "Turong", 1992, "Mlynska 2", 3, "informatika", {});
console.log(student1);
student1.prestehujSe("Jablonskeho 2");