const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// A função carrega consigo o contexto léxico no qual ela foi declarada, ou seja, *Global*