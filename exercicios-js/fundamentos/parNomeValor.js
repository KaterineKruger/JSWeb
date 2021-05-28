// par Nome-Valor
const saudacao = 'Bom dia' // Contexto léxico 01

function exec() {
    const saudacao = 'Olá' // Contexto léxico 02
    return saudacao
}

// Objetos são grupos aninhados de pares Nome-Valor
const cliente = {
    nome: 'Guilherme',
    idade: 23,
    peso: 86,
    endereco: {
        logradouro: 'Rua Evandro Schneider',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)