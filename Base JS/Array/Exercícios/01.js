/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text(a ser passado para a função)
e com ponto de exclamação "!" no final.

Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"*/

// Resolução 1:
function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

// Resolução 2:
function cumprimentar(nome) {
    return "Olá, " + nome + "!"
}

// Resolução 3:
function cumprimentar(nome) {
    return `Olá, ${nome}!`
}