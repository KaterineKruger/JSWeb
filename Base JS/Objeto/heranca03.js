const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha01 = Object.create(pai) // Definindo já de início que seu protótipo é a classe "pai"
filha01.nome = 'Ana'
console.log(filha01.corCabelo)

const filha02 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha02.nome)
filha02.nome = 'Carla'
console.log(`${filha02.nome} tem cabelo ${filha02.corCabelo}`)

console.log(Object.keys(filha01))
console.log(Object.keys(filha02))

for (let key in filha02) {
    filha02.hasOwnProperty(key) ? // O nome pertence ao próprio objeto (hasOwnProperty)
        console.log(key) : console.log(`Por herança: ${key}`)
}