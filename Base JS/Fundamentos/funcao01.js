console.log(typeof Object)
// Objeto é função

class Produto { }
console.log(typeof Produto)
// Classes são funçōes

// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

/* É possível, não acontece erro */
imprimirSoma(2, 10, 4, 5, 6, 7, 0) // A função utiliza os dois primeiros números e ignora o resto
imprimirSoma(2) // O segundo valor se torna Undefined, sendo assim, a função retorna NaN
imprimirSoma() // A soma de dois valores Undefined retorna NaN

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) // Atualiza o valor de *b* para 3
console.log(soma(2)) // Usa o valor inicial de *b = 1*