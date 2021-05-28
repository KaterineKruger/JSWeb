// Novo recurso do ES2015

const pessoa = {
    nome: 'Julia',
    idade: 17,
    endereco: {
        logradouro: 'Rua Testo Alto',
        numero: 123
    }
}

const { nome, idade} = pessoa // Destructuring
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // Destructuring
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // Destructuring de atributos que não existem
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // Destructuring de dados de um objeto dentro do objeto
console.log(logradouro, numero, cep)