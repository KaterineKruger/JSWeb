/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e
retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo
deve-se abstrair as condições matemáticas de existência de um triângulo). */

// FEITO

function identificarTriangulo(a, b, c) {
    if (a == b  && a == c) {
        console.log('As medidas informadas indicam queo triângulo é Equilátero.')
    } else if (a == b || a == c || b == c) {
        console.log('As medidas informadas indicam queo triângulo é Isósceles.')
    } else if (a != b && a != c && b != c) {
        console.log('As medidas informadas indicam queo triângulo é Escaleno.')
    }
}

identificarTriangulo(2, 2, 2)
identificarTriangulo(2, 3, 2)
identificarTriangulo(2, 3, 4)