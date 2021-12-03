let uzivatel = {
    krestniJmeno: "Tonda",
    povolani: "Lektor",
    rokNarozeni: 1992,
    jeZivy: true,
    hobby: ["basskytara", "posilovani", "fotografovani", "programovani"],
    notebook: {
        znacka: "MSI",
        ram: 16,
        disk: "2tb",
        zaruka: false,
        vybava: ["webkamera", "thunderbolt", "ctecka otisku", "USB C"]
    }
};

console.log(uzivatel);
//pristup k hodnote
console.log(uzivatel.rokNarozeni); //1992
console.log(uzivatel.hobby[3]); //programovani
console.log(uzivatel.notebook.znacka); //MSI
console.log(uzivatel.notebook.vybava[1]); //thunderbolt


//zmena hodnoty

uzivatel.rokNarozeni = 2009;
console.log(uzivatel);
//pridani do pole
uzivatel.hobby.push("Plavani")
//zmena hodnoty v poli
uzivatel.hobby[2] = "Nataceni";


uzivatel.notebook.vybava[2] = "zmena";
console.log(uzivatel);

//pridat novou vlastnost
uzivatel["auto"] = "Suzuki";
uzivatel.manzelka = null;
uzivatel.jeZenaty = false;
console.log(uzivatel);

//mazani 
delete uzivatel.auto;
console.log(uzivatel);