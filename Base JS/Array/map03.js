// Criando sua própria função map
Array.prototype.map02 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json) //Transformar em objeto
const apenasPreco = produto => produto.preco //Selecionar apenas o preço

const resultado = carrinho.map02(paraObjeto).map02(apenasPreco)
console.log(resultado)