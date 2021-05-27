// *a* armazena o endereço no qual o objeto se localiza
const a = {name: 'Teste'}
console.log(a)


// *b* armazena o mesmo endereço de *a*
const b = a
console.log(b)


b.name = 'Olá' // Fazendo isso, você altera o que está armazenado no endereço, fazendo com que o objeto *a.name* também mude
console.log(b)
console.log(a)

/* Quando lidamos com tipos primitivos, uma cópia do valor é feita e salva na outra variável, de forma que os valores de *c* e *d* trabalhem
independentemente */

let c = 3
let d = c
d++
console.log(d)
console.log(c)