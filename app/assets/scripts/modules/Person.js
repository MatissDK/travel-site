//"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.call = function () {
        console.log(`Name ${this.name} and surname is ${this.surname}`)
    }
};

module.exports = Person;

console.log('Person js');