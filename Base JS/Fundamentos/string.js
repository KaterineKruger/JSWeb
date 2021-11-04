const escola = "Cod3r"

console.log(escola.charAt(4)) // Mostra um determinado caractere dentro da String
console.log(escola.charAt(5)) // Quando não acha o caracter, não dá erro, apenas não aparece
console.log(escola.charCodeAt(3)) // Mostra o código do caracter em questão
console.log(escola.indexOf('3')) // Mostra o índice do caractere em questão

console.log(escola.substring(1)) // Mostra o caractere em questão
console.log(escola.substring(0, 3)) // Mostra um pedaço da String que foi delimitado pelos índices

console.log('Escola '.concat(escola).concat("!")) // Concatenação
console.log('Escola ' + escola + "!") // Concatenação
console.log(escola.replace(3, 'e')) // Muda o caracter em questão

console.log('Ana, Maria, Pedro'.split(',')) // Separa a String em ítens de um novo Array