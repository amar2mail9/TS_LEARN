

// this type blank obj
const person: object = {
    name: "John",
    age: 36
    
}

console.log(person);


// 
const person1: { name: string; age: number; email:string} = {
    name: "John",
    age: 36,
    email:"amar@gmail.com"
    
}

console.log(person1.age,person1.email,person1.name);

// obj type

type objType = { name: string; age: number; email: string }


const person2:objType = {
    name: "John",
    age: 36,
    email:"amar@gmail.com"
    
}
const person3:objType = {
    name: "Moan",
    age: 36,
    email:"amar@gmail.com"
    
}