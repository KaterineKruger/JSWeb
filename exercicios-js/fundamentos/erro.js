function tratarErro(erro) {
    // throw new Error('...')   *É possível lançar um novo erro
    // throw 10                 *É possível lançar um número
    // throw true               *É possível lançar um valor booleano
    // throw 'mensagem'         *É possível lançar uma String
    throw {                  // *É possível lançar um objeto
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {  // Este bloco não é necessário, mas quando usado, independente de existir um erro ou não, sempre será executado.
        console.log('Final')
    }
}

const obj01 = { name: 'Guilherme' }
imprimirNomeGritado(obj01)

const obj02 = { nome: 'Katerine' } // *nome* não existe, sendo assim, resulta em erro.
imprimirNomeGritado(obj02)