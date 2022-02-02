const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Como o array começa com índice 0, é somado 1 na hora da impressão no console
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})

// Arrow Function
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)