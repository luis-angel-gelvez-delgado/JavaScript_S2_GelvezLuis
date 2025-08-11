/*  Npi de para que era esta parte
function Person(){
    this.name = ""
    this.lastname = ""
}

function Programer(){
    this.language = ""
}

programer.prototype = new person()

console.log(Programer)
console.log(Person)

const person = new person();
person.name = "Maria"
person.lastname = "Perez"
console.log(person)

const programer = new Programer();
programer.name = "Alberto"
programer.lastname = "godinez"
programer.language = "javaScript"

console.log(programer)
*/





//Herencia con todo y parametros, Programer va a heredar de Person

class Person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
        this.age = null
    }
}

class Programer extends Person {
    constructor(language, name, lastname){
        super(name, lastname);//las propiedades se pasan con super
        this.language = this.language
    }
}

const person = new Person('Maria', 'Perez')
console.log(person)

const programer = new Programer('Joe', 'Arroyo', 'Python')
console.log(programer)
