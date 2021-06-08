// Estratégia 01 para gerar valor padrão

function soma01(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma01())
console.log(soma01(3))
console.log(soma01(1, 2, 3))
console.log(soma01(0, 0, 0)) // Zero retorna falso, assumindo assim o valor *1*   !!!BUG!!!

// Estratégia 02, 03 e 04 para gerar valor padrão

function soma02(a, b, c) {
    a = a !== undefined ? a : 1   // Segunda
    b = 1 in arguments ? b : 1    // Terceira
    c = isNaN(c) ? 1 : c          // Quarta - mais segura
    return a + b + c
}

console.log(soma02())
console.log(soma02(3))
console.log(soma02(1, 2, 3))
console.log(soma02(0, 0, 0))

// Estratégia de valor padrão ES2015

function soma03(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma03())
console.log(soma03(3))
console.log(soma03(1, 2, 3))
console.log(soma03(0, 0, 0))