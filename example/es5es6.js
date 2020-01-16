// Pre-ES6

function Person(attrs){
    this.name = attrs.name
    this.age = attrs.age  
    this.save()
}

var allThePeople = []

Person.prototype.sayThis = function(message){
    console.log(`Hi, this is ${this.name}. The message is: ${message}`)
}

Person.prototype.save = function(){
    allThePeople.push(this)
}

Person.all = function(){
    return allThePeople
}

var beti = new Person({
    name: "Beti",
    age: 32
})




















// ES6 class syntax (syntactic sugar)
// (not actual class inheritance)

const allTheAnimals = []

class Animal {
    constructor(attrs){
        this.name = attrs.name  
        this.voice = attrs.voice
        this.save()
    }

    speak() {
        console.log(`${this.name}, speak!`)
        console.log(`${this.voice}!`)
    }

    save(){
        allTheAnimals.push(this)
    }

    // Could we make this a getter method?
    static all(){
        return allTheAnimals
    }

}

const zelda = new Animal({
    name: "Zelda",
    voice: "Miauuuuuu"
})