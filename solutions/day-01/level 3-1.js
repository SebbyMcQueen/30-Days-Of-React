const { get } = require("http");

// #1 & #3 & #5
const dog = {
    name: "Fern",
    legs: 4,
    color: "greenish yellow",
    age: 3,
    breed: "chihuahua",
    bark: function() {
        return "woof woof";
    },
    getDogInfo: function() {
        return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`;
    }
}

// #2
console.log(dog);

// #4
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());
