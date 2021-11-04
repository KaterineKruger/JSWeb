// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // Não faça isso em casa! (modificar o atributo do objeto original)

const avo = { attr01: 'A' } // Tem como protótipo o Object.prototype
const pai = { __proto__: avo, attr02: 'B', attr03: '3' } // Tem como protótipo o avô
const filho = { __proto__: pai, attr03: 'C' } // Tem como protótipo o pai
console.log(filho.attr0, filho.attr01, filho.attr02, filho.attr03)

// Shadowing (sombreamento): assim que o sistema encontra o atributo no próprio objeto herdado, ele passa a sobrescrever o atributo de mesmo nome do objeto "pai".

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: 'V40',
    status() { // Shadowing
        return `${this.modelo}: ${super.status()}`
    }
}

// Definindo o carro como protótipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())