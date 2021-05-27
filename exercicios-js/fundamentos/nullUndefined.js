let valor // Não inicializa
console.log(valor)
/*console.log(valor0)*/ // Gera um erro dizendo que esta variável "is not defined" (não está definida)

valor = null // Variável já "definida", porém com ausência de valor
console.log(valor)
/*console.log(valor.toString())*/ // TypeError, não é possível acessar, pois está nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // PÉSSIMA PPRÁTICA!!
console.log(!!produto.preco)
/*delete produto.preco*/ // Para tirar o atributo de um objeto
console.log(produto)

produto.preco = null // "Produto sem preço", porém válido
console.log(!!produto.preco)
console.log(produto)