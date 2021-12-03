let originalniText = `Dneska je pondeli a tonda zacona kurz JavaScriptu`;

//nahradi vsechna velka pismena za mala
let vseMale = originalniText.toLowerCase();
console.log(vseMale);

//opkem je toUpperCase()
let vseVelke = originalniText.toUpperCase();
console.log(vseVelke);

//zjisteni dely stringu

console.log(originalniText.length);

//substring 
let jmeno = originalniText.substring(20, 25);
console.log(jmeno);

//replace
let nahrazenyTonda = originalniText.replace("tonda", "Pepa");
console.log(nahrazenyTonda);


//pomoc indexOf muzeme zjistit v jake pozici je nas hledany text 
let indexTondy = originalniText.indexOf("Tonda");
console.log(indexTondy);

