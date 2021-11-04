const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Keys
console.log(Object.keys(pessoa))
    // Values
console.log(Object.values(pessoa))
    // Entries
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Define Property
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o01 = { b: 2 }
const o02 = { c: 3, a: 4 }
const obj = Object.assign(dest, o01, o02)

// Freeze
Object.freeze(obj)
obj.c = 1234
console.log(obj)