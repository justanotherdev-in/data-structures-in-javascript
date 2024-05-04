const person = {
    firstname: "John",
    lastname: "Doe",
    age: 21,
    greet: function() { return "Hello from " + this.firstname + " " + this.lastname }
}
console.log(person)

console.log(person.greet())