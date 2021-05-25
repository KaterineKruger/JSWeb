let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo) // Número
console.log(!isAtivo) // Negação do número, o que o torna valor binário (boolean)
console.log(!!isAtivo) // Negação da negação

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Guilherme'
console.log(nome || 'Desconhecido')