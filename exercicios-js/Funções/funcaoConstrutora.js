function Carro(velocidadeMax = 200, delta = 5) {   // Delta é a aceleração do carro (acelera de 5 em 5)
    // Atributo privado
    let velocidadeAtual = 0

    // Método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }
}