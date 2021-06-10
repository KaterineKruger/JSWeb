function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())                       // Chamada direta de Função
console.log(produto.getPreco())               // Chamada de Função pelo objeto

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))             // Chamada de Função por call
console.log(getPreco.apply(carro))            // Chamada de Função por apply

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))