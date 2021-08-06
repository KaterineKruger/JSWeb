/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia
inválido dado o número referente ao dia. Considere que domingo é o dia 1
e sábado é o dia 7. Utilize a estrutura Switch. */

// FEITO

const diaDaSemana = function (dia) {
    switch (dia) {
        case 7:
            console.log('Sábado')
            break
        case 6:
            console.log('Sexta-Feira')
            break
        case 5:
            console.log('Quinta-Feira')
            break
        case 4:
            console.log('Quarta-Feira')
            break
        case 3:
            console.log('Terça-Feira')
            break
        case 2:
            console.log('Segunda-Feira')
            break
        case 1:
            console.log('Domingo')
            break
        default:
            console.log('Número inválido')
    }
}

diaDaSemana(10)
diaDaSemana(7)
diaDaSemana(6)
diaDaSemana(2)
diaDaSemana(-1)