interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

const user = { firstName: "Heedo", lastName: "Kim" };

console.log(greeter(user));