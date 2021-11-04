/*Get e Set são funções que */

const sequencia = {
    _valor: 1, // Underline no início da variável é uma convenção que indica que a mesma está pretendida a ser usada apenas internamente, como se fosse privada.
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)