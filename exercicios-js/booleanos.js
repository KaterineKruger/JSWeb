let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo) // Número
console.log(!isAtivo) // Negação do número, o que o torna valor binário (boolean)
console.log(!!isAtivo) // Negação da negação

console.log('Os verdadeiros...')
console.log(!!3) // Número inteiro
console.log(!!-1) // Número inteiro
console.log(!!' ') // Espaço em texto
console.log(!!'texto') // Texto
console.log(!![]) // Array (mesmo vazio)
console.log(!!{}) // Objeto literal
console.log(!!Infinity) // Tipo infinito
console.log(!!(isAtivo = true)) // Atribuição verdadeira

console.log('Os falsos...')
console.log(!!0) // Zero
console.log(!!'') // String vazia
console.log(!!null) // Nulo
console.log(!!NaN) // Not a Number
console.log(!!undefined) // Indefinido
console.log(!!(isAtivo = false)) // Atribuição falsa

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome01 = ''
console.log(nome01 || 'Desconhecido')

let nome02 = 'Guilherme'
console.log(nome02 || 'Desconhecido')