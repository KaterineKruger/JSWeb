function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Destructuring
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
    /* console.log(rand())      ---> ERRO! Pois tenta desestruturar algo que é nulo ou undefined */