// Classe --- *this* é necessário em Classe

class Pessoa {
    constructor(nome) {
        this.nome = nome   //******************************************
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Guilherme')
p1.falar()

// Função Factory --- *this* não é necessário em Função Factory

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Katerine')
p2.falar()