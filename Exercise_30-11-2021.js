/*let vladniNarizeni = true

let school = {
    type: "Gymnazium",
    street: "Okruzni 218",
    city: "Pribram",
    capacity: 200,
    open: function(){
        console.log(`Skola ${this.type} ${this.city} je oteverena `)
    },
    closed: function(){
        console.log(`Skola ${this.type} ${this.city} je zavrena `)
    }
}

if(vladniNarizeni)
{
    school.closed()
}
else{
    school.open()
}
*/

let person1 = {
    fistName: "David",
    secondName: "Myval",
    age: 18,
    zdraveni: function(){
        console.log(this.fistName)
        console.log(this.seconName)
        console.log(this.age)
    }
}

person1.zdraveni()

let person2 = {
    fistName: "Vladimir",
    secondName: "Putin",
    age: 666,
    zdraveni: function(){
        console.log(this.fistName)
        console.log(this.secondName)
        console.log(this.age)
    }
}

person2.zdraveni()

console.log(`sss`)