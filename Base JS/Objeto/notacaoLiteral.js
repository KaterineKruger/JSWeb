// Com a última atualização, algumas melhorias foram adicionadas, tais como:

const a = 1
const b = 2
const c = 3

const obj01 = { a: a, b: b, c: c }
    // Melhoria 01:
const obj02 = { a, b, c }
console.log(obj01, obj02)

// --------------------------------------------------

const nomeAtr = 'nota'
const valorAtr = '7.87'

const obj03 = {}
obj03[nomeAtr] = valorAtr
console.log(obj03)

//Melhoria 02
const obj04 = {
    [nomeAtr]: valorAtr
}
console.log(obj04)

// --------------------------------------------------

const obj05 = {
    funcao01: function() {
        // ...
    },
    //Melhoria 03
    funcao02() {
        // ...
    }
}
console.log(obj05)