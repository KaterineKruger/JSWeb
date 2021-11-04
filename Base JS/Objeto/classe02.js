// Herança declarada em classes

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Para instanciar a função construtora da super classe (Avo)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const avo = new Avo
console.log(avo)
const pai = new Pai
console.log(pai)
const filho = new Filho
console.log(filho)