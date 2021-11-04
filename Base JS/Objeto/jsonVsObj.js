// jsonlint.com - validator
// JSON: Java Script Object Notation - Formato textual com dados

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj)) // Transformando em JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // Transformando em objeto -> desse modo não funciona
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // Transformando em objeto -> desse modo não funciona
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Transformando em objeto
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // Transformando em objeto