const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Forma imperativa
// É focada em COMO a obtenção do resultado é feita.

let total01 = 0
for (let i = 0; i < alunos.length; i++) {
    total01 += alunos[i].nota
}

console.log(total01 / alunos.length)

// Forma declarativa
// É focada no resultado, no objetivo final (O QUÊ).

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total02 = alunos.map(getNota).reduce(soma)
console.log(total02 / alunos.length)

/*SQL é uma linguagem declarativa*/