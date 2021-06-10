console.log(soma(2, 2))  // Isso FUNCIONA
console.log(sub(2, 2)) // Isso NÃO FUNCIONA (função ainda não está declarada)
console.log(mult(2, 2)) // Isso NÃO FUNCIONA (função ainda não está declarada)

// Function declaration
function soma(x, y) {
    return x + y
}
/* Quando usamos essa forma, o JS carrega primeiro as funções, depois o resto, sendo assim, é possível executá-la antes de "declará-la"*/

// Function declaration
const sub = function (x, y) {
    return x - y
}
console.log(sub(2, 2)) // Agora funciona, pois está sendo usada depois de ser declarada

// Function declaration
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(2, 2)) // Agora funciona, pois está sendo usada depois de ser declarada