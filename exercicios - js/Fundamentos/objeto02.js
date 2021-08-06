console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function () { }
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto { } // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

// Quando você cria um objeto na forma literal, você automaticamente instancia o mesmo. Quando você cria uma classe, você instancia dentro dela diversos objetos.