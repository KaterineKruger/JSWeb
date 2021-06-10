// Função Factory:
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('iPhone', 3500))
console.log(criarProduto('Notebook Dell', 4300))
console.log(criarProduto('Samsung Galaxy A52', 1700))