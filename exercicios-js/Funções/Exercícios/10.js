/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. */

// FEITO

let isDivisivel = true

function divisaoTres(valor) {
    if (valor % 3 === 0) {
        console.log(isDivisivel)
    } else {
        console.log(!isDivisivel)
    }
}

divisaoTres(9)
divisaoTres(10)
divisaoTres(6)