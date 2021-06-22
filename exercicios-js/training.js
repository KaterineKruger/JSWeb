dobro = a => 2 * a   // Return implícito
console.log(dobro(Math.PI))

ola = () => 'Olá'
console.log(ola())

// Função Arrow não aponta para o global
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)