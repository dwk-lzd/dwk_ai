const people = [
    { name: 'Alice', age: 20, role: 'user' },
    { name: 'Bob', age: 18, role: 'admin' },
    { name: 'Charlie', age: 25, role: 'user' },
]
const allAults = people.every(person => person.age >= 18)
const hasAdmin = people.some(person => person.role === 'admin')
console.log(allAults, hasAdmin);
