function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // Destructuring 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([])) // Assume os valores padrões
    /* console.log(rand())      ---> ERRO! Pois tenta desestruturar algo que é nulo ou undefined */