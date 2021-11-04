const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)   // Para cada elemento do Array, ele chama de volta (callback) a função
fabricantes.forEach(fabricante => console.log(fabricante))