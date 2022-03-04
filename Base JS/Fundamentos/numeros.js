const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
    // Transformar o tipo de dado em inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Setar um limite de casas após a vírgula / arredondar
console.log(media.toFixed(2))

// Converter o número em String
console.log(media.toString())

// Converter o número em String binária
console.log(media.toString(2))

// Mostrar o tipo de dado da constante
console.log(typeof media)

// ---------------> *Alguns cuidados*

console.log(7 / 0) // Quando dividido por zero, resulta infinito
console.log("10" / 2) // Cuidado com operaçōes de String
console.log("3" - 2) // Funciona como operação, pois a linguagem entende o "-" como operador aritmético
console.log("3" + 2) // Funciona como concatenação, pois o "+" não é interpretado pela linguagem como operador aritmético
console.log("Show!" * 2) // Não é reconhecido como número
console.log(0.1 + 0.7) // Imprecisão com operaçōes de ponto flutuante
    //console.log(10.toString()) ---> não é possível chamar diretamente o LITERAL.função
console.log((10.345).toFixed(2)) // É possível chamar um ((LITERAL).função) entre parênteses