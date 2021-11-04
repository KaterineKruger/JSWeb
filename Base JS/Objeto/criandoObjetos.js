// Primeira forma: Usando a notação literal
const obj01 = {}
console.log(obj01)

// Segunda forma: Object em JS
console.log(typeof Object, typeof new Object)
const obj02 = new Object
console.log(obj02)

// Terceira forma: Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p01 = new Produto('Caneta', 7.99, 0.15)
const p02 = new Produto('Notebook', 2998.99, 0.25)
console.log(p01.getPrecoComDesconto(), p02.getPrecoComDesconto())

// Quarta forma: Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f01 = criarFuncionario('João', 7980, 4)
const f02 = criarFuncionario('Maria', 11400, 1)
console.log(f01.getSalario(), f02.getSalario())

// Quinta forma: Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função famosa que retorna um Objeto:
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)