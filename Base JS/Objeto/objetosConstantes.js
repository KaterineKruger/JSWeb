// Uma constante aponta para um endereço de memória específico que, por sua vez, aponta para um objeto.
// pessoa -> 123 -> {...}

const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Com os passos acima, o objeto é alterado, e não o endereço na memória.

// Caso você tente alterar o endereço de memória que é apontado pela constante, não funcionará, pois é constante.
// pessoa -> 456 -> {...} --- não é possível.
// pessoa = { nome: 'Ana' } -> Com esses passos, existe a tentativa de mudança de endereço de memória da constante.

Object.freeze(pessoa) // Dessa maneira, o objeto é congelado e não é mais possível alterá-lo de nenhuma maneira.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)