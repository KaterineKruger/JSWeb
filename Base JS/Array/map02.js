const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) //Transformar em objeto
const apenasPreco = produto => produto.preco //Selecionar apenas o preço

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)