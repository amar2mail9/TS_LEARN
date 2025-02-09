// objects Array Tuple Enum

console.log("Hello");

// object

const person: {
    firstName: String;
    lastName: String;
    age: Number;
    address: {
        state:string
    },
    skills: string[],
    marks:number[]
} = {
    firstName: "Amar",
    lastName: "Kumar",
    age: 21,
    address: {
        state:"Bihar"
    },
    skills: ['HTML', 'CSS'],
    marks:[12,34,56,778,45]
}

console.log(person.lastName);
