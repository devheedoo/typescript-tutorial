function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Heedo", lastName: "Kim" };
console.log(greeter(user));
