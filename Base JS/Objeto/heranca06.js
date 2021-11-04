// Classe em JS é convertido para função

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula01 = new Aula('Bem vindo', 123)
const aula02 = new Aula('Até breve', 456)
console.log(aula01, aula02)

// Simulando o new
/* A nova função recebe uma função construtora e também um conjunto de parâmetros*/
function novo(f, ...params) {
    const obj = {} // Criação de um novo objeto sem usar new
    obj.__proto__ = f.prototype // Associação do protótipo do objeto ao atributo "prototype" da função passada - é o que acontece quando é chamado o new de uma função construtora
    f.apply(obj, params)
    return obj
}

const aula03 = novo(Aula, 'Bem vindo', 123)
const aula04 = novo(Aula, 'Até breve', 456)
console.log(aula03, aula04)