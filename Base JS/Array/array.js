/* 
01 - Arrays são objetos;
02 - Array literal é usado com colchetes assim como objeto literal é usado com chaves;
03 - O ideal é trabalhar com Arrays homogêneos (dados do mesmo tipo - Strings, números...);
04 - Quando você usa o 'new' junto com uma função, é criado um objeto;
*/
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Guilherme')
console.log(aprovados.length)

aprovados[9] = 'Juia'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Reorganiza o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento01', 'Elemento02') // Remover e alterar os índices de um array
console.log(aprovados)