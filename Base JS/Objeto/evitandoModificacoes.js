// Object.preventExtensions: Proíbe que seu objeto seja extendido, adicionar novos atributos não será permitido
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

// A exclusão e alteração de dados são possíveis, a adição de novos atributos não.
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // Não será possível.
delete produto.tag
console.log(produto)

// Object.seal: Adição e exclusão proibídas, porém alteração possível.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze: Adição, exclusão e alteração proibídas.