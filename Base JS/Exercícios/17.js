/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho,
de acordo com a tabela abaixo:

-----------------------
|  Plano  |  Aumento  |
-----------------------
|    A    |    10%    |
|    B    |    15%    |
|    C    |    20%    |
-----------------------

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário
e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso
default que indique que o plano é inválido. */

// FEITO

const aumento = function (plano, salario) {
    switch (plano) {
        case 'A':
            console.log('O novo salário com adição do plano A é: ' + (salario + salario * 0.1))
            break
        case 'B':
            console.log('O novo salário com adição do plano B é: ' + (salario + salario * 0.15))
            break
        case 'C':
            console.log('O novo salário com adição do plano C é: ' + (salario + salario * 0.2))
            break
        default:
            console.log('Plano inválido')
            break
    }
}

aumento('A', 1500)
aumento('B', 1500)
aumento('C', 1500)
aumento('G', 1500)