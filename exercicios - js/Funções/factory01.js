// Função Factory existe para evitar este tipo de repetição:
const prod01 = {
    nome: 'Livro 01',
    preco: 25
}

const prod02 = {
    nome: 'Camisa Polo',
    preco: 50
}

const prod03 = {
    nome: 'Capinha iPhone',
    preco: 100
}

// Função Factory simples:
function criarPessoa() {
    return {
        nome: 'Katerine',
        sobrenome: 'Krüger'
    }
}

console.log(criarPessoa())