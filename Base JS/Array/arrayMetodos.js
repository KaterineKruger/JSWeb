const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Remove o primeiro índice
pilotos.pop()
console.log(pilotos)

// Remove o último índice
pilotos.shift()
console.log(pilotos)

// Adiciona um índice no começo
pilotos.unshift('Vetter')
console.log(pilotos)

// Adiciona um índice no final
pilotos.push('Hamilton')
console.log(pilotos)

// Adiciona, retira e troca índices do array (o mais flexível)
pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionar
console.log(pilotos)
pilotos.splice(1, 1, 'Senna') // Trocar
console.log(pilotos)
pilotos.splice(3, 1) // Remover
console.log(pilotos)

// Cria um NOVO array usando índices do array atual
const algunsPilotos01 = pilotos.slice(1) // A partir de determinado índice
console.log(algunsPilotos01)

const algunsPilotos02 = pilotos.slice(1, 4) // A partir de determinado índice, até um índice anterior ao fornecido (nesse caso, índices 1, 2 e 3)
console.log(algunsPilotos02)